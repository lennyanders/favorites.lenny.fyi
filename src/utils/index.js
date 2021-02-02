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
      }
      if (Array.isArray(value)) {
        value = value.join('');
      }
      return string + value;
    })
    .join('');

/**
 * @param {String[]} list
 */
export const toReadableList = (list) =>
  list.length > 1 ? `${list.slice(0, -1).join(', ')} & ${list[list.length - 1]}` : list[0];
