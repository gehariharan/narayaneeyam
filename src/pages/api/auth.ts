import type { APIRoute } from 'astro';
import { verifyPin, createSessionToken, sessionCookie, clearSessionCookie, checkRateLimit } from '../../lib/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  if (!checkRateLimit(ip)) {
    return new Response(JSON.stringify({ error: 'Too many attempts. Try again in a minute.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await request.json().catch(() => null);
  const pin = body?.pin;
  if (!pin || !verifyPin(pin)) {
    return new Response(JSON.stringify({ error: 'Invalid PIN' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const token = createSessionToken();
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': sessionCookie(token),
    },
  });
};

export const DELETE: APIRoute = async () => {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': clearSessionCookie(),
    },
  });
};
