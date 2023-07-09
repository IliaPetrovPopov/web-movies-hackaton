import { movies } from '../data/movies-data.js';
import {
  getCategories,
  getMoviesGeneralInfo,
  getMovieById,
  getCategory,
} from '../data/movies.js';

export const loadCategories = async () => {
  const categories = await getCategories();
  return categories;
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
};

export const loadMovies = async (categoryId = null) => {
  const movies = await getMoviesGeneralInfo(categoryId);
  return movies;
};

export const loadSingleMovie = async (id) => {
  const movie = await getMovieById(id);
  return movie;
};

export const loadSearchMovies = (searchTerm = '') => {
  return searchTerm
    ? movies.filter((movie) =>
        movie.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    : movies;
};
