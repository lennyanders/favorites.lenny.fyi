import { html } from '~utils';

export default (id) =>
  html`<a href="https://amvnews.ru/index.php?go=Files&in=view&id=${id}">
    <svg viewBox="0 0 24 24" class="icon">
      <image href="/amvnewsIcon.ico" x="4" y="4" height="16" width="16" />
    </svg>
  </a>`;
