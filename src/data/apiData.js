export const APIs = {
  generalAPI: {
    key: import.meta.env.VITE_MOVIEDB_API_KEY,
    url: 'https://api.themoviedb.org',
    path: '/3/discover/movie',
  },
  imgAPI: {
    url: 'https://image.tmdb.org',
    path: '/t/p/w500',
  },
};

console.log(APIs.generalAPI.key);

export const PARAMS = {
  apiKey: 'api_key',
  sortBy: 'sort_by',
  page: 'page',
  releaseYear: 'year',
  region: 'region',
  genresToInclude: 'with_genres',
  genresToExclude: 'without_genres',
  hasVideo: 'include_video',
  isAdult: 'include_adult',
  minVoteCount: 'vote_count.gte',
  minVoteAvg: 'vote_average.gte',
};

export const GENRES = [
  'Comedy',
  'Thriller',
  'Mystery',
  'Drama',
  'Crime',
  'Action',
  'Adventure',
  'Romance',
  'Science Fiction',
];

export const GENRES_TO_EXLUDE = 'Animation,Documentary,TV-Film,Family';

export const REGIONS = [
  'US',
  'IN',
  'HK',
  'FR',
  'IR',
  'IT',
  'JP',
  'KR',
  'MX',
  'TW',
  'CN',
  'ES',
  'GB',
  'AR',
  'BR',
  'DE',
  'GR',
  'HU',
  'SE',
  'NO',
  'RU',
];
