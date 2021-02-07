import { html } from '~utils';
import animemusicvideos from './IconLinks/animemusicvideos';
import amvnews from './IconLinks/amvnews';
import akross from './IconLinks/akross';
import imdb from './IconLinks/imdb';
import disney from './IconLinks/disney';
import netflix from './IconLinks/netflix';
import youtube from './IconLinks/youtube';
import vimeo from './IconLinks/vimeo';
import web from './IconLinks/web';

export default (
  {
    title,
    animemusicvideosId,
    amvnewsId,
    akrossId,
    imdbId,
    disneyPlusId,
    netflixId,
    youtubeId,
    vimeoId,
    homepage,
  },
  content,
) => html`<li class="media-item">
  <div class="media-item__top">
    <h3>${title}</h3>
    ${animemusicvideosId && animemusicvideos(animemusicvideosId)} ${amvnewsId && amvnews(amvnewsId)}
    ${akrossId && akross(akrossId)} ${imdbId && imdb(imdbId)}
    ${disneyPlusId && disney(disneyPlusId)} ${netflixId && netflix(netflixId)}
    ${youtubeId && youtube(youtubeId)} ${vimeoId && vimeo(vimeoId)} ${homepage && web(homepage)}
  </div>
  ${content}
</li>`;
