import { join } from 'path';
import jsconfig from './jsconfig.json';
import vue from '@vitejs/plugin-vue';

const {
  compilerOptions: { paths, baseUrl },
} = jsconfig;
const cwd = process.cwd();
const alias = {};
for (const key in paths) {
  const newKey = key.endsWith('/*') ? key.slice(0, -2) : key;
  const path = paths[key][0];
  const newPath = path.endsWith('/*') ? path.slice(0, -2) : path;

  alias[newKey] = join(cwd, baseUrl, newPath);
}

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  plugins: [vue()],
  alias,
};

export default config;
