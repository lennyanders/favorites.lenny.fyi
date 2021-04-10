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

// https://stackoverflow.com/questions/16697791/nodejs-get-filename-of-caller-function#29581862
const getCallerFile = () => {
  const originalErrorPrepareStackTrace = Error.prepareStackTrace;
  let callerfile;
  try {
    Error.prepareStackTrace = (_err, stack) => stack;

    const error = new Error();
    const currentfile = error.stack.shift().getFileName();

    while (error.stack.length) {
      callerfile = error.stack.shift().getFileName();
      if (callerfile !== currentfile) break;
    }
  } finally {
    Error.prepareStackTrace = originalErrorPrepareStackTrace;
    return callerfile;
  }
};

/** @type {Object.<string, string[]>} */
export const allCss = {};

const docIdMap = new Map();
let docCounter = -1;

let oldFilename, cssBlockCounter, cssBlockWithIdCounter;

/**
 * @param {TemplateStringsArray} strings
 * @param  {any[]} interpolations
 */
export const css = (strings, ...interpolations) => {
  const filename = getCallerFile();
  let id = '';

  if (filename !== oldFilename) {
    cssBlockCounter = -1;
    cssBlockWithIdCounter = -1;
  }

  const css = String.raw(strings, ...interpolations)
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

    id = `y${docIdMap.get(filename)}${
      ++cssBlockWithIdCounter > 0 ? (cssBlockWithIdCounter - 1).toString(36) : ''
    }`;
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
