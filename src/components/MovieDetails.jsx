import { useContext } from 'react';
import { ImgLoadedContext } from './Contexts';

export default function MovieDetails({ movie }) {
  const isImgLoaded = useContext(ImgLoadedContext);
  if (!isImgLoaded) {
    return null;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
    </div>
  );
}
