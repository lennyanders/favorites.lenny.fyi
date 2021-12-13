import sass from 'sass';

export const extension = 'css';

export const render = () => sass.compile('src/styles/main.scss', { style: 'compressed' }).css;
