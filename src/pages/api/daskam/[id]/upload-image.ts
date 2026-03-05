import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../../../lib/auth';
import { processImage, uploadToBlob } from '../../../../lib/image-gen';
import { getDaskam } from '../../../../lib/blob-content';

export const prerender = false;

export const POST: APIRoute = async ({ params, request }) => {
  if (!isAuthenticated(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const id = parseInt(params.id!, 10);
  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
  }

  const formData = await request.formData().catch(() => null);
  if (!formData) {
    return new Response(JSON.stringify({ error: 'Expected multipart form data' }), { status: 400 });
  }

  const imageFile = formData.get('image') as File | null;
  const slokaIndex = parseInt(formData.get('slokaIndex') as string, 10);

  if (!imageFile) {
    return new Response(JSON.stringify({ error: 'No image file provided' }), { status: 400 });
  }
  if (isNaN(slokaIndex)) {
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

  try {
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const { masterPng, webWebp } = await processImage(buffer);
    const { masterUrl, webUrl } = await uploadToBlob(id, stanza.n, masterPng, webWebp);

    return new Response(JSON.stringify({ masterUrl, webUrl }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message || 'Upload failed' }), { status: 500 });
  }
};
