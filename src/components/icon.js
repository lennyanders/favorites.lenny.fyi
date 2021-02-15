import { css, html } from '~utils';

const iconClass = css`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
`;

export default (content, viewBox = '0 0 24 24') =>
  html`<svg viewBox="${viewBox}" class="${iconClass}">${content}</svg>`;
