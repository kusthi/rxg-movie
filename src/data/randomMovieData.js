import { APIs, PARAMS, GENRES, REGIONS, GENRES_TO_EXLUDE } from './apiData';

export function getRandomMovieURLs() {
  const year = getRandomValue(1940, new Date().getFullYear());
  const genre = getRandomValueFromArray(GENRES);
  const region = getRandomValueFromArray(REGIONS);
  return constructQueryableURL(year, genre, region);
}

export function getRandomPagedURL(urlString, totalPages) {
  const url = new URL(urlString);
  const page = getRandomValue(1, totalPages);
  url.searchParams.set(PARAMS.page, page);

  return url.toString();
}

export function getTitleIndex(total_results, total_pages) {
  //20 is the max titles per page response
  const fullPages = Math.floor(total_results / 20);
  let randomIndex = getRandomValue(19);
  return randomIndex > fullPages
    ? getRandomValue(total_results % total_pages)
    : randomIndex;
}

export function getMovieImageURL(imgPath) {
  const api = APIs.imgAPI;
  return api.url + api.path + imgPath;
}

function constructQueryableURL(
  year,
  genre,
  region,
  genresToExclude = GENRES_TO_EXLUDE,
  isAdult = false,
  minVoteCount = 300,
  minVoteAvg = 8
) {
  const api = APIs.generalAPI;
  const url = new URL(api.path, api.url);
  url.searchParams.set(PARAMS.apiKey, api.key);
  url.searchParams.set(PARAMS.releaseYear, year);
  url.searchParams.set(PARAMS.genresToInclude, genre);
  url.searchParams.set(PARAMS.genresToExclude, genresToExclude);
  url.searchParams.set(PARAMS.region, region);
  url.searchParams.set(PARAMS.genresToExclude, genresToExclude);
  url.searchParams.set(PARAMS.isAdult, isAdult);
  url.searchParams.set(PARAMS.minVoteCount, minVoteCount);
  url.searchParams.set(PARAMS.minVoteAvg, minVoteAvg);

  return url.toString();
}

export function getRandomValue(min, max) {
  if (arguments.length == 1) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomValueFromArray(array) {
  const maxValue = array.length - 1;
  return array[getRandomValue(maxValue)];
}
