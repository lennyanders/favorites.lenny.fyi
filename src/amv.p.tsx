import { Base } from './templates/Base';
import { MediaList } from './components/MediaList';
import { MediaItem } from './components/MediaItem';
import { Amv } from './shared';
import { getJsonFiles, toReadableList } from './utils';

export const title = 'amv';
export const collection = 'nav';
export const collectionIndex = 1;

export const render = async () => {
  const amvs = await getJsonFiles<Amv>('src/data/amv');

  return (
    <Base description="My Favorite Anime Music Videos">
      <MediaList>
        {amvs
          .sort((a, b) =>
            `${a.creators}${a.title}`.localeCompare(`${b.creators}${b.title}`, undefined, {
              sensitivity: 'base',
            }),
          )
          .map((amv) => (
            <MediaItem media={amv}>
              {`${amv.releaseYear} | ${toReadableList(amv.creators)} | ${amv.music}${
                amv.franchises?.length ? ` | ${toReadableList(amv.franchises)}` : ''
              }`}
            </MediaItem>
          ))}
      </MediaList>
    </Base>
  );
};
