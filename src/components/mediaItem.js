import { html } from '~utils';
import animemusicvideos from './IconLinks/animemusicvideos';
import amvnews from './IconLinks/amvnews';
import akross from './IconLinks/akross';
import imdb from './IconLinks/imdb';
import youtube from './IconLinks/youtube';
import vimeo from './IconLinks/vimeo';
import web from './IconLinks/web';

export default (
  { title, animemusicvideosId, amvnewsId, akrossId, imdbId, youtubeId, vimeoId, homepage },
  content,
) => html`<li class="media-item">
  <div class="media-item__top">
    <h3>${title}</h3>
    ${animemusicvideosId && animemusicvideos(animemusicvideosId)} ${amvnewsId && amvnews(amvnewsId)}
    ${akrossId && akross(akrossId)} ${imdbId && imdb(imdbId)} ${youtubeId && youtube(youtubeId)}
    ${vimeoId && vimeo(vimeoId)} ${homepage && web(homepage)}
  </div>
  ${content}
</li>`;
