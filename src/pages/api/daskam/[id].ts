import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../../lib/auth';
import { getDaskam, saveDaskam } from '../../../lib/blob-content';
import type { DaskamData } from '../../../lib/types';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const id = parseInt(params.id!, 10);
  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
  }

  const data = await getDaskam(id);
  if (!data) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ params, request }) => {
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const id = parseInt(params.id!, 10);
  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
  }

  const data = await request.json().catch(() => null) as DaskamData | null;
  if (!data || !data.stanzas) {
    return new Response(JSON.stringify({ error: 'Invalid data' }), { status: 400 });
  }

  try {
    data.id = id;
    await saveDaskam(id, data);
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    console.error('saveDaskam failed', { id, error: e?.message || e });
    return new Response(JSON.stringify({ error: e?.message || 'Save failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
