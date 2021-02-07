import { html, toReadableList } from '~utils';
import mediaItem from '~components/mediaItem';

export const data = {
  layout: 'base',
  title: 'mv',
  description: 'My Favorite Music Videos',
  tags: ['nav'],
  order: 2,
};

export const render = ({ mvs }) =>
  Object.values(mvs).map((mv) =>
    mediaItem(
      mv,
      html`${mv.releaseYear} | ${toReadableList(mv.directors)} | ${toReadableList(mv.musicArtists)}
      | ${toReadableList(mv.styles)}`,
    ),
  );
