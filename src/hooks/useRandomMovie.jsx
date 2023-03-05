import {
  getRandomPagedURL,
  getRandomMovieURLs,
  getTitleIndex,
} from '../data/randomMovieData';
import { useState } from 'react';

const sessionKey = 'titleIds';
sessionStorage.setItem(sessionKey, JSON.stringify([]));

export function useRandomMovie(intialVal) {
  const [movie, setMovie] = useState(intialVal);

  const setRandomMovie = async () => {
    if (movie !== null) {
      setMovie(null);
    }

    //randomizing page key, otherwise it will always be 1(default)
    const url = getRandomMovieURLs();
    const response = await fetch(url);
    const data = await response.json();
    const totalPages = data.total_pages;
    const totalResults = data.total_results;

    //try again if random response has no titles
    if (totalPages > 0) {
      const randomIndex = getTitleIndex(totalResults, totalPages);
      const pagedURL = getRandomPagedURL(url, totalPages);
      const response_2 = await fetch(pagedURL);
      const data_2 = await response_2.json();
      const randomMovieNullabale = data_2.results[randomIndex];
      const titlesArray = JSON.parse(sessionStorage.getItem(sessionKey));

      //try again in case of no poster or repeated title
      if (
        randomMovieNullabale.poster_path !== null &&
        !titlesArray.includes(randomMovieNullabale.id)
      ) {
        sessionStorage.setItem(
          sessionKey,
          JSON.stringify([...titlesArray, randomMovieNullabale.id])
        );
        setMovie(randomMovieNullabale);
      } else {
        setRandomMovie();
      }
    } else {
      setRandomMovie();
    }
  };

  return [movie, setRandomMovie];
}
