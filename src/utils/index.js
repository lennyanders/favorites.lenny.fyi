/**
 * @param {TemplateStringsArray} strings
 * @param  {any[]} interpolations
 */
export const html = (strings, ...interpolations) =>
  strings
    .map((string, i) => {
      let value = interpolations[i];
      if (!value && value !== 0) {
        value = '';
      } else if (Array.isArray(value)) {
        value = value.join('');
      } else if (typeof value === 'function') {
        value = value();
      }
      return string + value;
    })
    .join('');

/**
 * @param {TemplateStringsArray} _strings
 * @param  {any[]} _interpolations
 */
export const css = (_strings, ..._interpolations) => {
  throw new Error(
    'Using the "css" tag directly is not supported. Make sure you have preloaded the cssLoaderModule correctly',
  );
};

/** @type {Object.<string, string[]>} */
export const allCss = {};

const docIdMap = new Map();
let docCounter = -1;

let oldFilename, cssBlockCounter, cssBlockWithIdCounter;
export const cssCollector = (filename, css) => {
  let id = '';

  if (filename !== oldFilename) {
    cssBlockCounter = -1;
    cssBlockWithIdCounter = -1;
  }

  css = css
    .trim()
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*,\s*/g, ',')
    .replace(/\s+/g, ' ');

  let step2 = css.split('{');
  const firstPart = step2[0];
  if (firstPart.includes(':')) {
    if (firstPart.endsWith(';')) {
      step2[0] = `${firstPart}}`;
    } else {
      const split = firstPart.split(';');
      step2[0] = `${split.slice(0, -1).join(';')};}${split[split.length - 1]}`;
    }
    step2.unshift('&');
  }
  step2 = step2.join('{');

  if (step2.includes('&')) {
    if (!docIdMap.has(filename)) docIdMap.set(filename, (++docCounter).toString());

    id = `y${docIdMap.get(filename)}${(++cssBlockWithIdCounter).toString(36)}`;
    step2 = step2.replace(/&/g, `.${id}`);
  }

  if (!allCss[filename]) allCss[filename] = [];
  allCss[filename][++cssBlockCounter] = step2;

  oldFilename = filename;

  return id;
};

/**
 * @param {String[]} list
 */
export const toReadableList = (list) =>
  list.length > 1 ? `${list.slice(0, -1).join(', ')} & ${list[list.length - 1]}` : list[0];
