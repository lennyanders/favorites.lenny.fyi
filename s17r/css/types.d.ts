export type RequireSome<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: T[P] };

export type CssData = Partial<{
  global: Record<string, string[]>;
  font: string[];
  scoped: Record<string, string>;
}>;
