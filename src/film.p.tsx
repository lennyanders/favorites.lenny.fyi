import { Base } from './templates/Base';
import { MediaList } from './components/MediaList';
import { MediaItem } from './components/MediaItem';
import { Film } from './shared';
import { getJsonFiles, toReadableList } from './utils';

export const title = 'film';
export const collection = 'nav';
export const collectionIndex = 3;

export const render = async () => {
  const films = await getJsonFiles<Film>('src/data/film');

  return (
    <Base description="My Favorite Films">
      <MediaList>
        {films
          .sort((a, b) =>
            `${a.directors}${a.title}`.localeCompare(`${b.directors}${b.title}`, undefined, {
              sensitivity: 'base',
            }),
          )
          .map((film) => (
            <MediaItem media={film}>
              {`${film.releaseYear} | ${film.duration} min | ${toReadableList(
                film.directors,
              )} | ${toReadableList(film.styles)}${
                film.franchises?.length ? ` | ${toReadableList(film.franchises)}` : ''
              }`}
            </MediaItem>
          ))}
      </MediaList>
    </Base>
  );
};
