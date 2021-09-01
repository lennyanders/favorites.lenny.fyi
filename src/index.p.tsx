import { Base } from './templates/Base';
import { MediaList } from './components/MediaList';
import { MediaItem } from './components/MediaItem';
import { ShortFilm } from './shared';
import { getJsonFiles, toReadableList } from './utils';

export const title = 'short';
export const collection = 'nav';
export const collectionIndex = 0;

export const render = async () => {
  const shorts = await getJsonFiles<ShortFilm>('src/data/short');

  return (
    <Base description="My Favorite Short Films">
      <MediaList>
        {shorts
          .sort((a, b) =>
            `${a.directors}${a.title}`.localeCompare(`${b.directors}${b.title}`, undefined, {
              sensitivity: 'base',
            }),
          )
          .map((short) => (
            <MediaItem media={short}>
              {`${short.releaseYear} | ${short.duration} min | ${toReadableList(
                short.directors,
              )} | ${toReadableList(short.styles)}${
                short.franchises ? ` | ${toReadableList(short.franchises)}` : ''
              }`}
            </MediaItem>
          ))}
      </MediaList>
    </Base>
  );
};
