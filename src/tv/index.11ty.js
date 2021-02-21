import { css, html, toReadableList } from '~utils';
import mediaList from '~components/mediaList';
import mediaItem from '~components/mediaItem';

export const data = {
  layout: 'base',
  title: 'tv',
  description: 'My Favorite Series',
  tags: ['nav'],
  order: 4,
};

const originClass = css`
  text-transform: uppercase;
  opacity: 0.75;
  font-weight: 400;
`;

export const render = ({ series }) =>
  mediaList(
    Object.values(series)
      .sort((a, b) => {
        const textA = a.title.toUpperCase();
        const textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      })
      .map((series) => {
        series.title = html`${series.title}${series.originalTitle &&
        ` (${series.originalTitle}${
          series.origin && html` <small class="${originClass}">${series.origin}</small>`
        })`}`;

        return mediaItem(
          series,
          html`${series.releaseStart}${series.releaseEnd
            ? series.releaseEnd !== series.releaseStart && ` - ${series.releaseEnd}`
            : ' (unfinished)'}${series.canceled && ' (canceled)'}
          | ${series.averageEpisodeDuration} min | ${series.episodeCount} episodes across
          ${series.seasonCount} season${series.seasonCount > 1 && 's'} |
          ${toReadableList(series.creators)} |
          ${toReadableList(series.styles)}${series.franchises &&
          ` | ${toReadableList(series.franchises)}`}`,
        );
      }),
  );
