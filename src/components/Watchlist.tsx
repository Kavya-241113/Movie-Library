import React from 'react';
import { useMovies } from '../MoviesContext.tsx';

const Watchlist: React.FC = () => {
  const { watchlist, removeFromWatchlist, updateRating } = useMovies();

  return (
    <div>
      <h2 className="my-4">Watchlist</h2>
      <div className="row">
        {watchlist.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card">
              <img src={movie.poster} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
                <p>Rating: {movie.rating}</p>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => removeFromWatchlist(movie.id)}
                >
                  Remove
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => updateRating(movie.id, movie.rating + 1)}
                >
                  Increase Rating
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
