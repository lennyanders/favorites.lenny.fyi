import { css, html, toReadableList } from '~utils';
import mediaList from '~components/mediaList';
import mediaItem from '~components/mediaItem';

export const data = {
  layout: 'base',
  title: 'film',
  description: 'My Favorite Films',
  tags: ['nav'],
  order: 3,
};

const originClass = css`
  text-transform: uppercase;
  opacity: 0.75;
  font-weight: 400;
`;

export const render = ({ movies }) =>
  mediaList(
    Object.values(movies).map((movie) => {
      movie.title = html`${movie.title}${movie.originalTitle &&
      ` (${movie.originalTitle}${
        movie.origin && html` <small class="${originClass}">${movie.origin}</small>`
      })`}`;

      return mediaItem(
        movie,
        html`${movie.releaseYear} | ${movie.duration} min | ${toReadableList(movie.directors)} |
        ${toReadableList(movie.styles)}${movie.franchises &&
        ` | ${toReadableList(movie.franchises)}`}`,
      );
    }),
  );
