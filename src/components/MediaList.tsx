import { RenderableProps } from 'preact';

export const MediaList = ({ children }: RenderableProps<{}>) => (
  <ul class="media-list">{children}</ul>
);
