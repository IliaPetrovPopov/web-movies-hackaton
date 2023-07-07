import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';

export const loadCategories = () => {
  // missing implementation
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
}

export const loadMovies = (categoryId = null) => {
  // missing implementation
};

export const loadSingleMovie = (id) => {
  // missing implementation
};

export const loadSearchMovies = (searchTerm = '') => {
  return searchTerm
    ? movies.filter((movie) =>
        movie.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    : movies;
};
