import { APIs, PARAMS } from './apiData';

export async function storeGenresList() {
  const url = getGenresURL();
  const response = await fetch(url);
  const data = await response.json();
  const key = 'genreList';
  sessionStorage.setItem(key, JSON.stringify(data.genres));
  return key;
}

function getGenresURL() {
  const api = APIs.generalAPI;
  const url = new URL(api.genresPath, api.url);
  url.searchParams.set(PARAMS.apiKey, api.key);
  console.log(url.toString());
  return url.toString();
}
