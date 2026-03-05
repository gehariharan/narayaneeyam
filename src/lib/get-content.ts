import d01Local from '../content/daskam01.json';
import type { DaskamData, DaskamIndex } from './types';

/**
 * Build-time content fetcher: tries Vercel Blob first, falls back to local JSON.
 * Used by getStaticPaths() and page rendering.
 */

// Local content always available as baseline
const LOCAL_DASKAMS: Record<number, DaskamData> = {
  1: d01Local as unknown as DaskamData,
};

const LOCAL_INDEX = [
  { id: 1, title: 'Daskam 1', description: 'Brahma-tattva and the blessing of Guruvayur.' },
];

async function tryBlobContent(): Promise<{ index: DaskamIndex; getDaskam: (id: number) => Promise<DaskamData | null> } | null> {
  const token = import.meta.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return null;

  try {
    const { getIndex, getDaskam } = await import('./blob-content');
    const index = await getIndex();
    if (index.daskams.length === 0) return null;
    return { index, getDaskam };
  } catch {
    return null;
  }
}

/** Get all published daskam IDs and metadata for static path generation */
export async function getPublishedDaskamIds(): Promise<Array<{ id: number; title: string; description: string }>> {
  const blob = await tryBlobContent();
  if (blob) {
    const blobEntries = blob.index.daskams
      .filter(d => d.status === 'published')
      .map(d => ({ id: d.id, title: d.title, description: d.description }));
    if (blobEntries.length > 0) return blobEntries;
  }

  // Fallback: local content
  return LOCAL_INDEX;
}

/** Get daskam content by ID */
export async function getDaskamContent(id: number): Promise<DaskamData | null> {
  const blob = await tryBlobContent();
  if (blob) {
    const data = await blob.getDaskam(id);
    if (data) return data;
  }

  // Fallback: local content
  return LOCAL_DASKAMS[id] || null;
}
