import { writeFile } from 'fs/promises';
import sass from 'sass';

/**
 * @param {import('sass').Options} options
 * @returns {import('sass').Result}
 */
const sassRenderer = (options) => {
  return new Promise((resolve, reject) => {
    sass.render(options, (error, result) => {
      if (error) return reject(error);

      resolve(result);
    });
  });
};

export const data = {
  entrys: [
    {
      input: 'src/styles/main.scss',
      output: 'main.css',
    },
  ],
  pagination: {
    data: 'entrys',
    size: 1,
    alias: 'entry',
  },
  permalink: ({ entry }) => entry.output,
};

export const render = async ({ entry: { input, output } }) => {
  try {
    const { css, map } = await sassRenderer({
      file: input,
      outFile: `dist/${output}`,
      sourceMap: true,
    });

    await writeFile(`dist/${output}.map`, map);

    return css;
  } catch (error) {
    console.error(error);
  }
};
