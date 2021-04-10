import { css, html } from '~utils';

css`
  footer {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 1rem;
    border-top: 2px solid #191919;
    color: #ddd;
  }

  footer a:first-of-type {
    margin-right: auto;
  }
`;

export default () => html`<footer>
  <span>© 2021 – Lenny Anders</span>
  <a href="https://lenny.fyi/">Personal Homepage</a>
  <a href="https://lenny.fyi/legal">Legal</a>
  <a href="https://lenny.fyi/privacy">Privacy Policy</a>
</footer>`;
