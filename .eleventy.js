import { rmSync, writeFileSync } from 'fs';
import { allCss } from '~utils';

const config = {
  dir: {
    input: 'src',
    output: 'dist',
    includes: 'templates',
    data: 'data',
  },
};

module.exports = (eleventyConfig) => {
  rmSync('dist', { force: true, recursive: true });

  eleventyConfig.addPassthroughCopy({ 'src/assets': '.' });

  eleventyConfig.on('afterBuild', () => {
    writeFileSync(
      'dist/main.css',
      Object.values(allCss)
        .map((cssParts) => cssParts.join(''))
        .join(''),
    );
  });

  return config;
};
