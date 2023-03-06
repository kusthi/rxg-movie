import { useRandomMovie } from '../hooks/useRandomMovie';
import Movie from './Movie';
import Button from './Button';

export default function Home() {
  const [movie, setMovie] = useRandomMovie('');

  return (
    <>
      <div className='main-cont'>
        <Hero />
        <Button onClick={setMovie}>Generate Movie</Button>
        <Movie movie={movie} />
      </div>
    </>
  );
}

function Hero() {
  return (
    <div>
      <h1 className='titles'>Your movie night is on me</h1>
    </div>
  );
}
