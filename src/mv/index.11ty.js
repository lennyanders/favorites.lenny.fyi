import { html, toReadableList } from '~utils';
import mediaList from '~components/mediaList';
import mediaItem from '~components/mediaItem';

export const data = {
  layout: 'base',
  title: 'mv',
  description: 'My Favorite Music Videos',
  tags: ['nav'],
  order: 2,
};

export const render = ({ mvs }) =>
  mediaList(
    Object.values(mvs).map((mv) =>
      mediaItem(
        mv,
        html`${mv.releaseYear} | ${toReadableList(mv.directors)} |
        ${toReadableList(mv.musicArtists)} | ${toReadableList(mv.styles)}`,
      ),
    ),
  );
