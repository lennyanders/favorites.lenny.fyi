const toMediaItemList = (mediaItems) =>
  Object.entries(mediaItems).map(([key, mediaItem]) => ({ ...mediaItem.default, id: key }));

export const shorts = toMediaItemList(import.meta.globEager('./shorts/*.json'));
export const amvs = toMediaItemList(import.meta.globEager('./amvs/*.json'));
