import icon from '~components/icon';
import { html } from '~utils';

export default (id) =>
  html`<a href="https://www.netflix.com/title/${id}">
    ${icon(html`<path
      d="M6.5 2h4l3 8.8V2h4v20c-1.3-.2-2.6-.4-4-.4l-3-8.6v8.6c-1.5 0-2.8.2-4 .4V2z"
      fill="#E10914"
    />`)}
  </a>`;
