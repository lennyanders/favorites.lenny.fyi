import { cssData } from './data.js';

/** @param {string} str */
const kebabize = (str) => {
  return str
    .split('')
    .map((letter) => {
      if (letter.toUpperCase() !== letter) return letter;
      else return `-${letter.toLowerCase()}`;
    })
    .join('');
};

/** @param {import('csstype').Properties | import('csstype').AtRule.FontFace} rule */
const ruleToCss = (rule) => {
  return Object.entries(rule)
    .map(([key, value]) => `${kebabize(key)}:${value}`)
    .join(';');
};

/**
 * @param {string} selector
 * @param {import('csstype').Properties} rule
 */
export const globalStyle = (selector, rule) => {
  const css = ruleToCss(rule);
  const globalStyles = (cssData.global ??= {});

  if (Array.isArray(globalStyles[selector])) {
    if (globalStyles[selector].includes(css)) return;

    globalStyles[selector].push(css);
  } else {
    globalStyles[selector] = [css];
  }
};

/** @param {import('./types').RequireSome<import('csstype').AtRule.FontFace, 'fontFamily' | 'src'>} rule */
export const fontFace = (rule) => {
  const css = ruleToCss(rule);
  const fontStyles = (cssData.font ??= []);
  if (fontStyles.includes(css)) return;

  fontStyles.push(css);
};

/** @param {import('csstype').Properties} rule */
export const style = (rule) => {
  const css = ruleToCss(rule);
  const scopedStyles = (cssData.scoped ??= {});

  const entries = Object.entries(scopedStyles);
  const existingEntry = entries.find(([_key, value]) => value === css);
  const className = existingEntry ? existingEntry[0] : `y${entries.length}`;

  if (!existingEntry) scopedStyles[className] = css;

  return className;
};
