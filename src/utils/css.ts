import { dirname } from 'path';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { Properties, AtRule } from 'csstype';

export type RequireSome<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: T[P] };

export type CssData = Partial<{
  global: Record<string, string[]>;
  font: string[];
  scoped: Record<string, string>;
}>;

const cssDataFilePath = 'scripts/css-data.json';

const getCssData = (): CssData => {
  try {
    const rawData = readFileSync(cssDataFilePath, { encoding: 'utf-8' });
    return JSON.parse(rawData);
  } catch (_) {
    return {};
  }
};

const writeCssData = (data: CssData) => {
  mkdirSync(dirname(cssDataFilePath), { recursive: true });
  writeFileSync(cssDataFilePath, JSON.stringify(data), { encoding: 'utf-8' });
};

const kebabize = (str: string) => {
  return str
    .split('')
    .map((letter) => {
      if (letter.toUpperCase() !== letter) return letter;
      else return `-${letter.toLowerCase()}`;
    })
    .join('');
};

const ruleToCss = (rule: Properties | AtRule.FontFace) => {
  return Object.entries(rule)
    .map(([key, value]) => `${kebabize(key)}:${value}`)
    .join(';');
};

export const globalStyle = (selector: string, rule: Properties) => {
  const css = ruleToCss(rule);
  const data = getCssData();
  const globalStyles = (data.global ??= {});

  if (Array.isArray(globalStyles[selector])) {
    if (globalStyles[selector].includes(css)) return;

    globalStyles[selector].push(css);
  } else {
    globalStyles[selector] = [css];
  }
  writeCssData(data);
};

export const fontFace = (rule: RequireSome<AtRule.FontFace, 'fontFamily' | 'src'>) => {
  const css = ruleToCss(rule);
  const data = getCssData();
  const fontStyles = (data.font ??= []);
  if (fontStyles.includes(css)) return;

  fontStyles.push(css);
  writeCssData(data);
};

export const style = (rule: Properties) => {
  const css = ruleToCss(rule);
  const data = getCssData();
  const scopedStyles = (data.scoped ??= {});

  const entries = Object.entries(scopedStyles);
  const existingEntry = entries.find(([_key, value]) => value === css);
  const className = existingEntry ? existingEntry[0] : `y${entries.length}`;

  if (!existingEntry) {
    scopedStyles[className] = css;
    writeCssData(data);
  }

  return className;
};
