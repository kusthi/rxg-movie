import { useEffect, useContext } from 'react';
import { ImgLoadedContext } from './Contexts';

export default function LoadImageWithFeedback({ imgURL, setIsImgLoaded }) {
  const isImgLoaded = useContext(ImgLoadedContext);

  const image = new Image();
  image.onload = () => setIsImgLoaded(true);

  useEffect(() => {
    image.src = imgURL;
    return () => {
      image.src = '';
      setIsImgLoaded(false);
    };
  }, [imgURL]);

  if (!isImgLoaded) {
    return null;
  }

  return (
    <div className='img-cont'>
      <img
        className='img'
        src={imgURL}
        alt='Movie Poster'
      />
    </div>
  );
}
