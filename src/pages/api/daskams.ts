import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../lib/auth';
import { getAllDaskams } from '../../lib/blob-content';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }
  const daskams = await getAllDaskams();
  return new Response(JSON.stringify(daskams), {
    headers: { 'Content-Type': 'application/json' },
  });
};
