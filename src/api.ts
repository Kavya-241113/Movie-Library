import axios from 'axios';
import { Movie } from './types'; 


const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'd9268b4b47b7ce8ffe69d49ac395420b';


export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get(`${API_URL}?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 
      rating: movie.vote_average,
      overview: movie.overview,
    }));
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
