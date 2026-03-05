import { createHmac, timingSafeEqual } from 'node:crypto';

const COOKIE_NAME = 'na_session';
const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

function getSecret(): string {
  const pin = import.meta.env.ADMIN_PIN || process.env.ADMIN_PIN || '';
  return pin + '_narayaneeyam_session_key';
}

/** Constant-time PIN comparison */
export function verifyPin(input: string): boolean {
  const pin = import.meta.env.ADMIN_PIN || process.env.ADMIN_PIN;
  if (!pin || !input) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(pin);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

/** Create HMAC-signed session token with expiry */
export function createSessionToken(): string {
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = `session:${expires}`;
  const sig = createHmac('sha256', getSecret()).update(payload).digest('hex');
  return `${payload}:${sig}`;
}

/** Verify session token is valid and not expired */
export function verifySessionToken(token: string): boolean {
  if (!token) return false;
  const parts = token.split(':');
  if (parts.length !== 3) return false;
  const [prefix, expiresStr, sig] = parts;
  const payload = `${prefix}:${expiresStr}`;
  const expected = createHmac('sha256', getSecret()).update(payload).digest('hex');
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length) return false;
  if (!timingSafeEqual(sigBuf, expBuf)) return false;
  const expires = parseInt(expiresStr, 10);
  return Date.now() < expires;
}

/** Check if request has valid session cookie */
export function isAuthenticated(request: Request): boolean {
  const cookie = request.headers.get('cookie') || '';
  const match = cookie.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  if (!match) return false;
  return verifySessionToken(decodeURIComponent(match[1]));
}

/** Build Set-Cookie header for login */
export function sessionCookie(token: string): string {
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_TTL_MS / 1000}`;
}

/** Build Set-Cookie header for logout */
export function clearSessionCookie(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`;
}

// Simple in-memory rate limiter (5 attempts per minute per IP)
const attempts = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  entry.count++;
  return entry.count <= 5;
}
