import { RenderableProps } from 'preact';
import { style } from 's17r/css';

export const iconClass = style({
  display: 'block',
  width: '1.5rem',
  fill: 'currentcolor',
});

export const Icon = ({
  viewBox = '0 0 24 24',
  children,
}: RenderableProps<{ viewBox?: string }>) => (
  <svg viewBox={viewBox} class={iconClass}>
    {children}
  </svg>
);
