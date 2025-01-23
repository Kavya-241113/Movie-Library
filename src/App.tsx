import React, { useEffect } from 'react';
import { fetchMovies } from './api.ts'; 
import { useMovies } from '../src/MoviesContext.tsx';
import MovieList from './components/MovieList.tsx';
import Watchlist from './components/Watchlist.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const { movies, setMovies } = useMovies();

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies();
      setMovies(fetchedMovies);
    };
    getMovies();
  }, [setMovies]);

  return (
    <div className="container">
      <h1 className="text-center my-4">Movie App</h1>
      <MovieList />
      <Watchlist />
    </div>
  );
};

export default App;
