import { html, toReadableList } from '~utils';
import mediaItem from '~components/mediaItem';

export const data = {
  layout: 'base',
  title: 'amv',
  description: 'My Favorite AMVs',
  tags: ['nav'],
  order: 1,
};

export const render = ({ amvs }) =>
  Object.values(amvs).map((amv) =>
    mediaItem(
      amv,
      html`${amv.releaseYear} | ${toReadableList(amv.creators)} | ${amv.music} |
      ${toReadableList(amv.franchises)}`,
    ),
  );
