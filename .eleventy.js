import { rmSync } from 'fs';

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

  return config;
};
