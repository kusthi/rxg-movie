import { useRandomMovie } from '../hooks/useRandomMovie';
import Movie from './Movie';
import Button from './Button';

export default function Home() {
  const [movie, setMovie] = useRandomMovie('');

  return (
    <>
      <div>
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
      <h1>Your movie night is on me</h1>
    </div>
  );
}
