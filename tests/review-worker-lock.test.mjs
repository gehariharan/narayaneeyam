import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

// Load the review Worker with a small fixture dataset in place of the ignored release bundle.
const fixture = {
  revision: 'lock-fixture-r1',
  assets: { 'media/d001/s001-matte-v001.webp': { type: 'image/webp', sha256: '0'.repeat(64) } },
  chapters: [{
    id: 1,
    revision: 'lock-fixture-r1',
    title: 'Dasakam 1',
    description: 'Fixture chapter',
    representative: 'media/d001/s001-matte-v001.webp',
    rows: [{ n: 1, commentary: 'Fixture commentary', images: [{ role: 'matte', key: 'media/d001/s001-matte-v001.webp', version: 'v001' }] }],
  }],
};
const source = (await fs.readFile(new URL('../review-site/worker.mjs', import.meta.url), 'utf8'))
  .replace("import data from '../artifacts/review-site/data.json';", `const data=${JSON.stringify(fixture)};`)
  .replace("from './views.mjs'", `from '${new URL('../review-site/views.mjs', import.meta.url).href}'`);
const worker = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const { unlockToken, safeNext } = worker;
const UNLOCK_COOKIE = 'narayaneeyam_unlock';
const UNLOCK_MAX_AGE = 90 * 24 * 60 * 60;

test('every named export of the Worker module is a function, as the Workers runtime requires', () => {
  // workerd rejects a main module whose named exports are not functions or handler objects.
  for (const [name, value] of Object.entries(worker)) {
    if (name === 'default') continue;
    assert.equal(typeof value, 'function', `export ${name} must be a function`);
  }
});

const SECRET = 'fixture shared passphrase';
const ORIGIN = 'https://gehariharan.com';
const BASE = ORIGIN + '/narayaneeyam';
const MEDIA = '/media/d001/s001-matte-v001.webp';

function makeEnv(secret = SECRET, { limited = false } = {}) {
  const writes = [], limits = [];
  return {
    writes, limits,
    NARAYANEEYAM_PASSPHRASE: secret,
    FEEDBACK_LIMIT: { limit: async ({ key }) => { limits.push(key); return { success: !limited }; } },
    DB: { prepare: sql => ({ bind: (...args) => ({ run: async () => { writes.push({ sql, args }); } }) }) },
    ART: { get: async key => key === MEDIA.slice(1) ? { body: 'image-bytes', httpEtag: '"etag-1"' } : null },
  };
}
const fetchWorker = (path, env, init = {}) => worker.default.fetch(new Request(BASE + path, init), env);
const withCookie = (cookie, init = {}) => ({ ...init, headers: { ...(init.headers || {}), cookie: `${UNLOCK_COOKIE}=${cookie}` } });
const unlockRequest = (passphrase, next = '/narayaneeyam/d001', origin = ORIGIN) => ({
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded', origin, 'CF-Connecting-IP': '203.0.113.7' },
  body: new URLSearchParams({ passphrase, next }).toString(),
});
const feedbackInit = cookie => withCookie(cookie, {
  method: 'POST',
  headers: { 'content-type': 'application/json', origin: ORIGIN },
  body: JSON.stringify({ daskam: 1, sloka: 1, message: 'Check the hand.', revision: fixture.revision, website: '' }),
});
const cookieFrom = response => /^narayaneeyam_unlock=([^;]+)/.exec(response.headers.get('set-cookie') || '')?.[1];

function assertLockedPage(response) {
  assert.equal(response.status, 401);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(response.headers.get('x-robots-tag'), 'noindex, nofollow');
  assert.match(response.headers.get('content-security-policy'), /form-action 'self'/);
  assert.equal(response.headers.get('set-cookie'), null);
}

test('without the secret every route stays locked and no passphrase unlocks it', async () => {
  for (const secret of [undefined, '']) {
    const env = makeEnv(secret);
    if (secret === undefined) delete env.NARAYANEEYAM_PASSPHRASE;
    assert.ok(!env.NARAYANEEYAM_PASSPHRASE);
    for (const path of ['/', '/d001', '/d999', '']) {
      const response = await fetchWorker(path, env);
      assertLockedPage(response);
      const html = await response.text();
      assert.match(html, /This site is locked\./);
      assert.match(html, /noindex/);
      assert.ok(!html.includes('Fixture commentary'));
      assert.ok(!html.includes('<form'), 'no passphrase form is offered without a configured secret');
    }
    const media = await fetchWorker(MEDIA, env);
    assert.equal(media.status, 401);
    assert.equal(await media.text(), '');
    assert.equal((await fetchWorker('/api/feedback', env, feedbackInit('x'))).status, 401);
    assert.equal(env.writes.length, 0);
    for (const guess of ['', 'anything', 'undefined']) {
      const response = await fetchWorker('/unlock', env, unlockRequest(guess));
      assertLockedPage(response);
    }
    // A token signed with any key is rejected when the Worker has no secret.
    const forged = await unlockToken('anything', Math.floor(Date.now() / 1000) + 3600);
    assertLockedPage(await fetchWorker('/d001', env, withCookie(forged)));
  }
});

test('locked pages offer the passphrase form; media, HEAD and feedback get empty 401s', async () => {
  const env = makeEnv();
  const page = await fetchWorker('/d001?x=1', env);
  assertLockedPage(page);
  const html = await page.text();
  assert.match(html, /<form method="post" action="\/narayaneeyam\/unlock">/);
  assert.match(html, /name="next" value="\/narayaneeyam\/d001\?x=1"/);
  assert.match(html, /type="password"/);
  assert.ok(!html.includes('Fixture commentary'));

  const head = await fetchWorker('/d001', env, { method: 'HEAD' });
  assertLockedPage(head);
  assert.equal(await head.text(), '');

  for (const init of [{}, { method: 'HEAD' }]) {
    const media = await fetchWorker(MEDIA, env, init);
    assert.equal(media.status, 401);
    assert.equal(media.headers.get('cache-control'), 'no-store');
    assert.equal(await media.text(), '');
  }
  const feedback = await fetchWorker('/api/feedback', env, feedbackInit(''));
  assert.equal(feedback.status, 401);
  assert.equal(await feedback.text(), '');
  assert.equal(env.writes.length, 0);
});

test('a wrong passphrase is refused with 401, no cookie and a rate-limit check', async () => {
  const env = makeEnv();
  const response = await fetchWorker('/unlock', env, unlockRequest('not the passphrase'));
  assertLockedPage(response);
  assert.match(await response.text(), /That passphrase is not correct\./);
  assert.deepEqual(env.limits, ['unlock:203.0.113.7']);

  const prefix = await fetchWorker('/unlock', env, unlockRequest(SECRET.slice(0, -1)));
  assertLockedPage(prefix);

  const limited = makeEnv(SECRET, { limited: true });
  const throttled = await fetchWorker('/unlock', limited, unlockRequest(SECRET));
  assert.equal(throttled.status, 429);
  assert.equal(throttled.headers.get('set-cookie'), null);

  const crossSite = await fetchWorker('/unlock', env, unlockRequest(SECRET, '/narayaneeyam/', 'https://evil.example'));
  assert.equal(crossSite.status, 403);
  assert.equal(crossSite.headers.get('set-cookie'), null);

  const json = await fetchWorker('/unlock', env, { ...unlockRequest(SECRET), headers: { 'content-type': 'application/json', origin: ORIGIN }, body: JSON.stringify({ passphrase: SECRET }) });
  assert.equal(json.status, 400);
  assert.equal(json.headers.get('set-cookie'), null);
});

test('the right passphrase sets a 90-day signed cookie that opens pages, media and feedback', async () => {
  const env = makeEnv();
  const response = await fetchWorker('/unlock', env, unlockRequest(SECRET, '/narayaneeyam/d001?view=1'));
  assert.equal(response.status, 303);
  assert.equal(response.headers.get('location'), '/narayaneeyam/d001?view=1');
  assert.equal(response.headers.get('cache-control'), 'no-store');
  const setCookie = response.headers.get('set-cookie');
  for (const attribute of ['HttpOnly', 'Secure', 'SameSite=Lax', 'Path=/narayaneeyam', `Max-Age=${UNLOCK_MAX_AGE}`]) assert.ok(setCookie.includes(attribute), attribute);
  assert.equal(UNLOCK_MAX_AGE, 90 * 24 * 60 * 60);
  const cookie = cookieFrom(response);
  assert.ok(!cookie.includes(SECRET) && !setCookie.includes(encodeURIComponent(SECRET)));

  const page = await fetchWorker('/d001', env, withCookie(cookie));
  assert.equal(page.status, 200);
  assert.equal(page.headers.get('cache-control'), 'private, no-cache');
  assert.equal(page.headers.get('x-robots-tag'), 'noindex, nofollow');
  assert.ok((await page.text()).includes('Fixture commentary'));

  const index = await fetchWorker('/', env, withCookie(cookie));
  assert.equal(index.status, 200);
  assert.equal((await fetchWorker('', env, withCookie(cookie))).status, 308);
  assert.equal((await fetchWorker('/d999', env, withCookie(cookie))).status, 404);

  const media = await fetchWorker(MEDIA, env, withCookie(cookie));
  assert.equal(media.status, 200);
  assert.equal(media.headers.get('cache-control'), 'private, max-age=86400');
  assert.equal(media.headers.get('etag'), '"etag-1"');
  assert.equal(await media.text(), 'image-bytes');
  const cached = await fetchWorker(MEDIA, env, withCookie(cookie, { headers: { 'if-none-match': '"etag-1"' } }));
  assert.equal(cached.status, 304);
  assert.equal(cached.headers.get('cache-control'), 'private, max-age=86400');

  const feedback = await fetchWorker('/api/feedback', env, feedbackInit(cookie));
  assert.equal(feedback.status, 201);
  assert.equal(env.writes.length, 1);

  // Other cookies alongside the unlock cookie are tolerated.
  const mixed = await fetchWorker('/d001', env, { headers: { cookie: `theme=dark; ${UNLOCK_COOKIE}=${cookie}; other=1` } });
  assert.equal(mixed.status, 200);

  // Visiting the unlock path while unlocked just returns to the index.
  const revisit = await fetchWorker('/unlock', env, withCookie(cookie));
  assert.equal(revisit.status, 303);
  assert.equal(revisit.headers.get('location'), '/narayaneeyam/');
});

test('forged, tampered, expired, overlong and rotated-secret cookies stay locked', async () => {
  const env = makeEnv();
  const now = Math.floor(Date.now() / 1000);
  const valid = await unlockToken(SECRET, now + 3600);
  assert.equal((await fetchWorker('/d001', env, withCookie(valid))).status, 200);

  const [expires, signature] = valid.split('.');
  // The first character carries six significant bits, so changing it always changes the signature bytes.
  const flipped = (signature[0] === 'A' ? 'B' : 'A') + signature.slice(1);
  // The last character's low two bits are padding: flipping one decodes to the same bytes, so only
  // a canonical-encoding check keeps this alternate spelling of a valid signature locked.
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  const nonCanonical = signature.slice(0, -1) + alphabet[alphabet.indexOf(signature.at(-1)) ^ 1];
  const cookies = [
    await unlockToken('a different passphrase', now + 3600),
    `${expires}.${flipped}`,
    `${expires}.${nonCanonical}`,
    `${Number(expires) + 1}.${signature}`,
    await unlockToken(SECRET, now - 1),
    await unlockToken(SECRET, now + UNLOCK_MAX_AGE * 2),
    `${now + 3600}.${'A'.repeat(43)}`,
    'garbage',
    '',
    `${expires}.${signature}x`,
  ];
  for (const cookie of cookies) {
    assertLockedPage(await fetchWorker('/d001', env, withCookie(cookie)));
    assert.equal((await fetchWorker(MEDIA, env, withCookie(cookie))).status, 401);
    assert.equal((await fetchWorker('/api/feedback', env, feedbackInit(cookie))).status, 401);
  }
  assert.equal(env.writes.length, 0);

  // Changing the secret signs out cookies issued under the previous passphrase.
  assertLockedPage(await fetchWorker('/d001', makeEnv('a new passphrase'), withCookie(valid)));
});

test('the post-unlock redirect never leaves /narayaneeyam on this site', async () => {
  const env = makeEnv();
  const hostile = [
    'https://evil.example/narayaneeyam/',
    '//evil.example/narayaneeyam/',
    '/\\evil.example/narayaneeyam/',
    '\\\\evil.example',
    '/narayaneeyam/\nSet-Cookie: x=1',
    'javascript:alert(1)',
    '/other-site',
    '/narayaneeyamx/d001',
    '/narayaneeyam/../admin',
    '/narayaneeyam/unlock',
    'narayaneeyam/d001',
    '',
  ];
  for (const next of hostile) {
    const response = await fetchWorker('/unlock', env, unlockRequest(SECRET, next));
    assert.equal(response.status, 303, next);
    assert.equal(response.headers.get('location'), '/narayaneeyam/', `redirect for ${JSON.stringify(next)}`);
    assert.equal(safeNext(next), '/narayaneeyam/');
  }
  assert.equal(safeNext('/narayaneeyam'), '/narayaneeyam');
  assert.equal(safeNext('/narayaneeyam/d001?x=1'), '/narayaneeyam/d001?x=1');

  // The lock page echoes the requested path only as an escaped hidden field.
  const page = await fetchWorker('/d001?q="><script>alert(1)</script>', env);
  const html = await page.text();
  assert.ok(!html.includes('<script>alert(1)</script>'));
});

test('requests outside the route and unsupported methods do not unlock anything', async () => {
  const env = makeEnv();
  const outside = await worker.default.fetch(new Request(ORIGIN + '/blog'), env);
  assert.equal(outside.status, 404);
  assert.equal(outside.headers.get('x-robots-tag'), 'noindex, nofollow');
  assert.equal((await fetchWorker('/d001', env, { method: 'POST', headers: { origin: ORIGIN } })).status, 401);
  assert.equal((await fetchWorker('/unlock', env, { method: 'PUT' })).status, 405);
});
