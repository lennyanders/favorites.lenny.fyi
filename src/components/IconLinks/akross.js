import icon from '~components/icon';
import { html } from '~utils';

export default (id) =>
  html`<a href="https://akross.ru/index.cgi?video=${id};l=e">
    ${icon(html`<image href="/akrossIcon.ico" x="2" y="2" height="20" width="20" />`)}
  </a>`;
