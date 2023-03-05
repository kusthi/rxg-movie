import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';
import InvalidPage from './InvalidPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        >
          <Route
            path='movie'
            element={<Movie />}
          />
        </Route>
        <Route
          path='*'
          element={<InvalidPage />}
        />
      </Routes>
    </>
  );
}
