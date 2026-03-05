import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../../../lib/auth';
import { getDaskam } from '../../../../lib/blob-content';
import { promptForStanza, processImage, uploadToBlob } from '../../../../lib/image-gen';
import OpenAI from 'openai';

export const prerender = false;

export const POST: APIRoute = async ({ params, request }) => {
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const id = parseInt(params.id!, 10);
  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
  }

  const body = await request.json().catch(() => null);
  const slokaIndex = body?.slokaIndex;
  if (typeof slokaIndex !== 'number') {
    return new Response(JSON.stringify({ error: 'Missing slokaIndex' }), { status: 400 });
  }

  const daskam = await getDaskam(id);
  if (!daskam) {
    return new Response(JSON.stringify({ error: 'Daskam not found' }), { status: 404 });
  }

  const stanza = daskam.stanzas[slokaIndex];
  if (!stanza) {
    return new Response(JSON.stringify({ error: 'Sloka not found' }), { status: 404 });
  }

  const apiKey = import.meta.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'OPENAI_API_KEY not configured' }), { status: 500 });
  }

  try {
    const client = new OpenAI({ apiKey });
    const prompt = promptForStanza(stanza, id);

    const res = await client.images.generate({
      model: 'gpt-image-1',
      prompt,
      size: '1536x1024',
    });

    const b64 = res.data?.[0]?.b64_json;
    if (!b64) throw new Error('No image returned from DALL-E');

    const pngBuffer = Buffer.from(b64, 'base64');
    const { masterPng, webWebp } = await processImage(pngBuffer);
    const { masterUrl, webUrl } = await uploadToBlob(id, stanza.n, masterPng, webWebp);

    return new Response(JSON.stringify({ masterUrl, webUrl }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message || 'Image generation failed' }), { status: 500 });
  }
};
