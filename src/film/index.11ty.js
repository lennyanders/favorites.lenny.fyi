import { html, toReadableList } from '~utils';
import mediaList from '~components/mediaList';
import mediaItem from '~components/mediaItem';

export const data = {
  layout: 'base',
  title: 'film',
  description: 'My Favorite Films',
  tags: ['nav'],
  order: 3,
};

export const render = ({ movies }) =>
  mediaList(
    Object.values(movies)
      .sort((a, b) => {
        const textA = a.title.toUpperCase();
        const textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      })
      .map((movie) =>
        mediaItem(
          movie,
          html`${movie.releaseYear} | ${movie.duration} min | ${toReadableList(movie.directors)} |
          ${toReadableList(movie.styles)}${movie.franchises &&
          ` | ${toReadableList(movie.franchises)}`}`,
        ),
      ),
  );
