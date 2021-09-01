import { RenderableProps } from 'preact';
import { Icon } from './Icon';

export const IconLink = ({ url, children }: RenderableProps<{ url: string }>) => (
  <a href={url}>
    <Icon>{children}</Icon>
  </a>
);
