import { put, list, del } from '@vercel/blob';
import type { DaskamData, DaskamIndex, DaskamIndexEntry } from './types';

const INDEX_KEY = 'content/daskam-index.json';
const daskamKey = (id: number) => `content/daskam-${String(id).padStart(2, '0')}.json`;

function getToken(): string {
  return import.meta.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_READ_WRITE_TOKEN || '';
}

/** Fetch JSON from a Blob URL */
async function fetchBlobJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Blob fetch failed: ${res.status}`);
  return res.json() as Promise<T>;
}

/** Find a blob by pathname prefix */
async function findBlob(prefix: string) {
  const token = getToken();
  const result = await list({ prefix, token });
  return result.blobs.find(b => b.pathname === prefix) || result.blobs[0] || null;
}

// --- Index operations ---

export async function getIndex(): Promise<DaskamIndex> {
  const blob = await findBlob(INDEX_KEY);
  if (!blob) return { version: 1, daskams: [] };
  return fetchBlobJson<DaskamIndex>(blob.url);
}

export async function saveIndex(index: DaskamIndex): Promise<void> {
  const token = getToken();
  await put(INDEX_KEY, JSON.stringify(index, null, 2), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    token,
  });
}

// --- Daskam CRUD ---

export async function getDaskam(id: number): Promise<DaskamData | null> {
  const blob = await findBlob(daskamKey(id));
  if (!blob) return null;
  return fetchBlobJson<DaskamData>(blob.url);
}

export async function saveDaskam(id: number, data: DaskamData): Promise<void> {
  const token = getToken();
  await put(daskamKey(id), JSON.stringify(data, null, 2), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    token,
  });

  // Update index entry
  const index = await getIndex();
  const existing = index.daskams.find(d => d.id === id);
  if (existing) {
    existing.title = data.title;
    existing.slokaCount = data.stanzas.length;
    existing.updatedAt = new Date().toISOString();
  } else {
    index.daskams.push({
      id,
      title: data.title,
      description: '',
      status: 'draft',
      slokaCount: data.stanzas.length,
      updatedAt: new Date().toISOString(),
    });
    index.daskams.sort((a, b) => a.id - b.id);
  }
  await saveIndex(index);
}

export async function publishDaskam(id: number): Promise<void> {
  const index = await getIndex();
  const entry = index.daskams.find(d => d.id === id);
  if (!entry) throw new Error(`Daskam ${id} not found in index`);
  entry.status = 'published';
  entry.updatedAt = new Date().toISOString();
  await saveIndex(index);
}

export async function deleteDaskam(id: number): Promise<void> {
  const token = getToken();
  const blob = await findBlob(daskamKey(id));
  if (blob) await del(blob.url, { token });

  const index = await getIndex();
  index.daskams = index.daskams.filter(d => d.id !== id);
  await saveIndex(index);
}

/** Get all published daskams for build-time rendering */
export async function getPublishedDaskams(): Promise<DaskamIndexEntry[]> {
  const index = await getIndex();
  return index.daskams.filter(d => d.status === 'published');
}

/** Get all daskams (including drafts) for admin */
export async function getAllDaskams(): Promise<DaskamIndexEntry[]> {
  const index = await getIndex();
  return index.daskams;
}
