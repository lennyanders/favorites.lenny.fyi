import { html, toReadableList } from '~utils';
import mediaList from '~components/mediaList';
import mediaItem from '~components/mediaItem';

export const data = {
  layout: 'base',
  title: 'short',
  description: 'My Favorite Short Films',
  tags: ['nav'],
  order: 0,
};

export const render = ({ shorts }) =>
  mediaList(
    Object.values(shorts).map((short) =>
      mediaItem(
        short,
        html`${short.releaseYear} | ${short.duration} min | ${toReadableList(short.directors)} |
        ${toReadableList(short.styles)}${short.franchises &&
        ` | ${toReadableList(short.franchises)}`}`,
      ),
    ),
  );
