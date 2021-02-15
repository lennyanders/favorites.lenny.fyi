import { css, html } from '~utils';

const mediaListClass = css`
  list-style: none;
  margin: 0;
  padding-left: 0;
  display: grid;
  gap: 0.5rem;
`;

export default (content) =>
  html`<ul class="${mediaListClass}">
    ${content}
  </ul>`;
