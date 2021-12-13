import { RenderableProps } from 'preact';

export const Icon = ({
  viewBox = '0 0 24 24',
  children,
}: RenderableProps<{ viewBox?: string }>) => <svg viewBox={viewBox}>{children}</svg>;
