import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../../lib/auth';
import { scrapeAll } from '../../../lib/scraper';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const num = parseInt(params.daskamNum!, 10);
  if (isNaN(num) || num < 1 || num > 100) {
    return new Response(JSON.stringify({ error: 'Invalid daskam number' }), { status: 400 });
  }

  try {
    const stanzas = await scrapeAll(num);
    return new Response(JSON.stringify(stanzas), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    console.error('scrapeAll failed', { num, error: e?.message || e });
    return new Response(JSON.stringify({ error: e?.message || 'Scrape failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
