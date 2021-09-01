import { Base } from './templates/Base';
import { MediaList } from './components/MediaList';
import { MediaItem } from './components/MediaItem';
import { Series } from './shared';
import { getJsonFiles, toReadableList } from './utils';

export const title = 'tv';
export const collection = 'nav';
export const collectionIndex = 4;

export const render = async () => {
  const series = await getJsonFiles<Series>('src/data/tv');

  return (
    <Base description="My Favorite Series">
      <MediaList>
        {series
          .sort((a, b) =>
            `${a.creators}${a.title}`.localeCompare(`${b.creators}${b.title}`, undefined, {
              sensitivity: 'base',
            }),
          )
          .map((series) => (
            <MediaItem media={series}>
              {`${series.releaseStart}${
                series.releaseEnd
                  ? series.releaseEnd !== series.releaseStart
                    ? ` - ${series.releaseEnd}`
                    : ''
                  : ' (unfinished)'
              }${series.canceled ? ' (canceled)' : ''} | ${series.averageEpisodeDuration} min | ${
                series.episodeCount
              } episodes across ${series.seasonCount} season${
                series.seasonCount > 1 ? 's' : ''
              } | ${toReadableList(series.creators)} | ${toReadableList(series.styles)}${
                series.franchises ? ` | ${toReadableList(series.franchises)}` : ''
              }`}
            </MediaItem>
          ))}
      </MediaList>
    </Base>
  );
};
