import React, { createContext, useContext, useState } from 'react';
import { Movie } from './types';

interface MoviesContextProps {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (id: string) => void;
  updateRating: (id: string, newRating: number) => void;
}

const MoviesContext = createContext<MoviesContextProps | null>(null);

export const MoviesProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  const addToWatchlist = (movie: Movie) => {
    if (!watchlist.some((item) => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (id: string) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
  };

  const updateRating = (id: string, newRating: number) => {
    setWatchlist(
      watchlist.map((movie) =>
        movie.id === id ? { ...movie, rating: newRating } : movie
      )
    );
  };

  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, watchlist, addToWatchlist, removeFromWatchlist, updateRating }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
