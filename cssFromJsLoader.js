const { addHook } = require('pirates');
const { existsSync, mkdirSync, writeFileSync } = require('fs');

/** @type {NodeJS.Timeout} */
let timeout;
let docCounter = -1;
const docIdMap = new Map();

/** @type {Object.<string, string[]>} */
const allCss = {};

addHook((code, filename) => {
  if (!code.includes('css`')) return code;

  const [firstCodeBlock, ...codeBlocksStartingWithCss] = code.split('css`');

  let cssBlockWithIdCounter = -1;
  const newCode = codeBlocksStartingWithCss.reduce((result, codeBlock, index) => {
    let id = '';
    const lastIndex = codeBlock.indexOf('`');

    const css = codeBlock
      .substring(0, lastIndex)
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
    allCss[filename][index] = step2;

    // console.log(filename, index, step2);
    // console.log(allCss);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!existsSync('dist')) mkdirSync('dist');

      writeFileSync(
        'dist/main.css',
        Object.values(allCss)
          .map((cssParts) => cssParts.join(''))
          .join(''),
      );
    }, 100);

    return `${result}'${id}'${codeBlock.substring(lastIndex + 1)}`;
  }, firstCodeBlock);

  return newCode;
});
