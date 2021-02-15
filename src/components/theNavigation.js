import { css, html } from '~utils';

const navClass = css`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.75rem;
  gap: 0.5rem;
  text-transform: uppercase;
  border-bottom: 2px solid #191919;
`;

const navItemClass = css`
  position: relative;
  padding: 0.5rem;
  color: #888;
  font-weight: bold;
  transition: color 0.2s ease;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #e92063;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &[aria-current],
  &:hover {
    color: #ddd;
  }

  &[aria-current]::after {
    opacity: 1;
  }
`;

export default ({ collections, title }) => html`<nav class="${navClass}">
  ${collections.nav
    .sort((a, b) => a.data.order - b.data.order)
    .map(
      (page) =>
        html`<a
          href="${page.url}"
          class="${navItemClass}"
          ${page.data.title === title && 'aria-current="page"'}
        >
          ${page.data.title}
        </a>`,
    )}
</nav>`;
