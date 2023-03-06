import { useContext, useEffect, useState } from 'react';
import { ImgLoadedContext } from './Contexts';
import { getMovieImageURL } from '../data/randomMovieData';
import { storeGenresList } from '../data/storeGenresList';
import LoadImageWithFeedback from './LoadImageWithFeedback';
import MovieDetails from './MovieDetails';

export default function Movie({ movie }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [genreListKey, setGenreListKey] = useState(null);

  useEffect(() => {
    (async () => {
      const key = await storeGenresList();
      setGenreListKey(key);
    })();
    return () => setGenreListKey(null);
  }, []);

  const isGenreListFetched = genreListKey !== null ? true : false;

  if (movie == null || movie == '') {
    return movie == '' ? null : (
      <h2 className='titles'>Finding a new random movie for you...</h2>
    );
  }

  return (
    <ImgLoadedContext.Provider value={isImgLoaded}>
      <div class='movie-cont'>
        <LoadingFeedback isGenreListFetched={isGenreListFetched} />
        <div>
          <LoadImageWithFeedback
            imgURL={getMovieImageURL(movie.poster_path)}
            setIsImgLoaded={setIsImgLoaded}
          />
          {isGenreListFetched ? (
            <MovieDetails
              movie={movie}
              genreListKey={genreListKey}
            />
          ) : null}
        </div>
      </div>
    </ImgLoadedContext.Provider>
  );
}

function LoadingFeedback({ isGenreListFetched }) {
  const isImgLoaded = useContext(ImgLoadedContext);

  if (isImgLoaded && isGenreListFetched) {
    return null;
  }

  return (
    <div>
      <h2 className='titles'>Got a movie! Fetching Data...</h2>
    </div>
  );
}
