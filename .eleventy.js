import { rmSync } from 'fs';

const config = {
  dir: {
    input: 'src',
    output: 'dist',
    includes: 'templates',
    data: 'data',
  },
};

export default (eleventyConfig) => {
  rmSync('dist', { force: true, recursive: true });

  eleventyConfig.addPassthroughCopy({ 'src/assets': '.' });

  eleventyConfig.addWatchTarget('src/styles');

  return config;
};
