import { Base } from './templates/Base';
import { MediaList } from './components/MediaList';
import { MediaItem } from './components/MediaItem';
import { MusicVideo } from './shared';
import { getJsonFiles, toReadableList } from './utils';

export const title = 'mv';
export const collection = 'nav';
export const collectionIndex = 2;

export const render = async () => {
  const musicVideos = await getJsonFiles<MusicVideo>('src/data/mv');

  return (
    <Base description="My Favorite Music Videos">
      <MediaList>
        {musicVideos
          .sort((a, b) =>
            `${a.musicArtists}${a.title}`.localeCompare(`${b.musicArtists}${b.title}`, undefined, {
              sensitivity: 'base',
            }),
          )
          .map((musicVideo) => (
            <MediaItem media={musicVideo}>
              {`${musicVideo.releaseYear} | ${toReadableList(
                musicVideo.directors,
              )} | ${toReadableList(musicVideo.musicArtists)} | ${toReadableList(
                musicVideo.styles,
              )}`}
            </MediaItem>
          ))}
      </MediaList>
    </Base>
  );
};
