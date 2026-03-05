import type { DaskamData, DaskamIndex } from './types';

/**
 * Build-time content fetcher: tries Vercel Blob first, falls back to local JSON.
 * Used by getStaticPaths() and page rendering.
 */

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
    return blob.index.daskams
      .filter(d => d.status === 'published')
      .map(d => ({ id: d.id, title: d.title, description: d.description }));
  }

  // Fallback: local JSON files
  try {
    const d01 = (await import('../content/daskam01.json')).default;
    return [{ id: d01.id, title: d01.title, description: 'Brahma-tattva and the blessing of Guruvayur.' }];
  } catch {
    return [];
  }
}

/** Get daskam content by ID */
export async function getDaskamContent(id: number): Promise<DaskamData | null> {
  const blob = await tryBlobContent();
  if (blob) {
    const data = await blob.getDaskam(id);
    if (data) return data;
  }

  // Fallback: local JSON
  try {
    if (id === 1) {
      return (await import('../content/daskam01.json')).default as unknown as DaskamData;
    }
    return null;
  } catch {
    return null;
  }
}
