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
    'Using the "css" tag in runtime is not supported. Make sure you have preloaded the cssLoaderModule correctly',
  );
};

/**
 * @param {String[]} list
 */
export const toReadableList = (list) =>
  list.length > 1 ? `${list.slice(0, -1).join(', ')} & ${list[list.length - 1]}` : list[0];
