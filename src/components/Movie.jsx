import { useContext, useState } from 'react';
import { getMovieImageURL } from '../data/randomMovieData';
import LoadImageWithFeedback from './LoadImageWithFeedback';
import MovieDetails from '../components/MovieDetails';
import { ImgLoadedContext } from './Contexts';

export default function Movie({ movie }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  if (movie == null || movie == '') {
    return movie == '' ? null : <h2>Finding a new random movie for you...</h2>;
  }

  return (
    <ImgLoadedContext.Provider value={isImgLoaded}>
      <LoadingFeedback />
      <div>
        <LoadImageWithFeedback
          imgURL={getMovieImageURL(movie.poster_path)}
          setIsImgLoaded={setIsImgLoaded}
        />
        <MovieDetails movie={movie} />
      </div>
    </ImgLoadedContext.Provider>
  );
}

function LoadingFeedback() {
  const isImgLoaded = useContext(ImgLoadedContext);

  if (isImgLoaded) {
    return null;
  }

  return (
    <div>
      <h2>Got a movie! Loading Data...</h2>
    </div>
  );
}
