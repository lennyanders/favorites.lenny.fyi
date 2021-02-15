import { html, toReadableList } from '~utils';
import mediaList from '~components/mediaList';
import mediaItem from '~components/mediaItem';

export const data = {
  layout: 'base',
  title: 'amv',
  description: 'My Favorite AMVs',
  tags: ['nav'],
  order: 1,
};

export const render = ({ amvs }) =>
  mediaList(
    Object.values(amvs).map((amv) =>
      mediaItem(
        amv,
        html`${amv.releaseYear} | ${toReadableList(amv.creators)} | ${amv.music} |
        ${toReadableList(amv.franchises)}`,
      ),
    ),
  );
