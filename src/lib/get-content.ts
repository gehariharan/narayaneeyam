import type { DaskamData, StanzaImage } from './types';

type JsonModule<T> = { default: T };
type CanonicalDaskam = Omit<DaskamData, 'stanzas'> & {
  stanzas: Array<Omit<DaskamData['stanzas'][number], 'image'>>;
};
type ApprovedOrientation = {
  status: string;
  preview_path: string | null;
};
type ApprovalManifest = {
  daskam_id: number;
  stanzas: Array<{
    n: number;
    alt: string;
    landscape: ApprovedOrientation;
    portrait: ApprovedOrientation;
  }>;
};

const contentModules = import.meta.glob<JsonModule<CanonicalDaskam>>('../../content/daskams/d*.json', { eager: true });
const approvalModules = import.meta.glob<JsonModule<ApprovalManifest>>('../../art/approved/d*.json', { eager: true });

const contents = Object.values(contentModules).map((module) => module.default);
const approvals = new Map(Object.values(approvalModules).map((module) => [module.default.daskam_id, module.default]));

const isAvailable = (asset: ApprovedOrientation) =>
  Boolean(asset?.preview_path && !['missing', 'planned', 'rejected'].includes(asset.status));

const mergeLocalArtwork = (content: CanonicalDaskam): DaskamData => {
  const manifest = approvals.get(content.id);
  const byStanza = new Map(manifest?.stanzas.map((item) => [item.n, item]) ?? []);
  return {
    ...content,
    stanzas: content.stanzas.map((stanza) => {
      const approved = byStanza.get(stanza.n);
      const landscapeSrc = approved && isAvailable(approved.landscape)
        ? approved.landscape.preview_path!
        : '/images/placeholder-landscape.svg';
      const image: StanzaImage = {
        alt: approved?.alt ?? `Narayaneeyam Daskam ${content.id}, stanza ${stanza.n}`,
        landscape: { src: landscapeSrc },
      };
      if (approved && isAvailable(approved.portrait)) image.portrait = { src: approved.portrait.preview_path! };
      return { ...stanza, image };
    }),
  };
};

const localDaskams = new Map(contents.map((content) => [content.id, mergeLocalArtwork(content)]));

export function getAvailableDaskamIds() {
  return [...localDaskams.values()]
    .sort((a, b) => a.id - b.id)
    .map((daskam) => ({ id: daskam.id, title: daskam.title, description: daskam.description }));
}

export function getDaskamContent(id: number): DaskamData | null {
  return localDaskams.get(id) ?? null;
}
