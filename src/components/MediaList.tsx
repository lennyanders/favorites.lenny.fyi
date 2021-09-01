import { RenderableProps } from 'preact';
import { style } from '../utils/css';

const mediaListClass = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'grid',
  gap: '0.5rem',
});

export const MediaList = ({ children }: RenderableProps<{}>) => (
  <ul class={mediaListClass}>{children}</ul>
);
