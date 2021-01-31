export const toReadableList = (list) =>
  list.length > 1 ? `${list.slice(0, -1).join(', ')} & ${list[list.length - 1]}` : list[0];

import { reactive } from 'vue';
export const toMediaItemList = (mediaItems) =>
  reactive(
    Object.entries(mediaItems).map(([key, mediaItem]) => ({ ...mediaItem.default, id: key })),
  );
