// switch to json-schema-to-ts after https://github.com/ThomasAribart/json-schema-to-ts/issues/33

export interface Amv {
  creators: string[];
  title: string;
  releaseYear?: number;
  franchises?: string[];
  music?: string;
  akrossId?: string;
  amvnewsId?: string;
  animemusicvideosId?: string;
  homepage?: string;
  vimeoId?: string;
  youtubeId?: string;
}

export interface Film {
  directors: string[];
  title: string;
  origin: string;
  originalTitle?: string;
  duration: number;
  releaseYear: number;
  styles: string[];
  franchises?: string[];
  disneyPlusId?: string;
  homepage?: string;
  imdbId?: string;
  netflixId?: string;
  primeVideoId?: string;
  vimeoId?: string;
  youtubeId?: string;
}

export interface MusicVideo {
  directors: string[];
  title: string;
  musicArtists: string[];
  releaseYear: number;
  styles: string[];
  homepage?: string;
  imdbId?: string;
  vimeoId?: string;
  youtubeId?: string;
}

export interface Series {
  creators: string[];
  title: string;
  origin: string;
  originalTitle?: string;
  canceled?: boolean;
  episodeCount: number;
  seasonCount: number;
  averageEpisodeDuration: number;
  releaseStart: number;
  releaseEnd?: number;
  styles: string[];
  franchises?: string[];
  disneyPlusId?: string;
  homepage?: string;
  imdbId?: string;
  netflixId?: string;
  primeVideoId?: string;
  vimeoId?: string;
  youtubeId?: string;
}

export interface ShortFilm {
  directors: string[];
  title: string;
  duration: number;
  releaseYear: number;
  styles: string[];
  franchises?: string[];
  disneyPlusId?: string;
  homepage?: string;
  imdbId?: string;
  netflixId?: string;
  primeVideoId?: string;
  vimeoId?: string;
  youtubeId?: string;
}

export type AnyMediaItem = Partial<Amv & Film & MusicVideo & Series & ShortFilm>;
