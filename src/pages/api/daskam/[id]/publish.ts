import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../../../lib/auth';
import { publishDaskam, getDaskam } from '../../../../lib/blob-content';

export const prerender = false;

export const POST: APIRoute = async ({ params, request }) => {
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const id = parseInt(params.id!, 10);
  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
  }

  // Verify daskam exists
  const data = await getDaskam(id);
  if (!data) {
    return new Response(JSON.stringify({ error: 'Daskam not found' }), { status: 404 });
  }

  await publishDaskam(id);

  // Trigger Vercel deploy hook if configured
  const deployHook = import.meta.env.VERCEL_DEPLOY_HOOK || process.env.VERCEL_DEPLOY_HOOK;
  let deployTriggered = false;
  if (deployHook) {
    try {
      const res = await fetch(deployHook, { method: 'POST' });
      deployTriggered = res.ok;
    } catch {
      // Deploy hook failure is non-fatal
    }
  }

  return new Response(JSON.stringify({ ok: true, deployTriggered }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
