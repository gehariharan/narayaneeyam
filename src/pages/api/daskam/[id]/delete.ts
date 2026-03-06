import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../../../lib/auth';
import { deleteDaskam, getIndex } from '../../../../lib/blob-content';

export const prerender = false;

export const POST: APIRoute = async ({ params, request }) => {
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const id = parseInt(params.id!, 10);
  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
  }

  // Only allow delete if draft
  const index = await getIndex();
  const entry = index.daskams.find((d) => d.id === id);
  if (entry?.status === 'published') {
    return new Response(JSON.stringify({ error: 'Cannot delete published daskam' }), { status: 400 });
  }

  try {
    await deleteDaskam(id);
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    console.error('deleteDaskam failed', { id, error: e?.message || e });
    return new Response(JSON.stringify({ error: e?.message || 'Delete failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
