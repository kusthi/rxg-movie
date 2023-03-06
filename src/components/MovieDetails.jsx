import { useContext } from 'react';
import { ImgLoadedContext } from './Contexts';

export default function ShowMovie({ movie, genreListKey }) {
  const isImgLoaded = useContext(ImgLoadedContext);

  const getGenres = () => {
    const allGenresList = JSON.parse(sessionStorage.getItem(genreListKey));
    const genreIds = movie.genre_ids;
    const genreNames = allGenresList
      .filter(genre => genreIds.includes(genre.id))
      .map(titleGenre => titleGenre.name)
      .join(', ');
    return genreNames;
  };

  const getYear = () => movie.release_date.split('-', 1)[0];

  if (!isImgLoaded) {
    return null;
  } else {
    return (
      <div className='movie-details'>
        <div className='movie-title'>
          <p>
            {movie.title} ({getYear()})
          </p>
        </div>
        <div className='movie-genres'>
          <p>{getGenres(genreListKey)}</p>
        </div>
        <div className='movie-desc'>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  }
}
