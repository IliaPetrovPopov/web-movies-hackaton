import { CONTAINER_SELECTOR, HOME } from '../common/constants.js';
import { toHomeView } from '../views/home-view.js';
import { toMoviesFromCategoryView } from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';

// public API
export const loadPage = async (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

      case CATEGORIES:
        setActiveNav(CATEGORIES);
        return await renderCategories();
  
      case FAVORITES:
        setActiveNav(FAVORITES);
        return renderFavorites();
  
      case ABOUT:
        setActiveNav(ABOUT);
        return renderAbout();
      default:
        return null;
    
  }

};

export const renderMovieDetails = async (id = null) => {
  const movie = await loadSingleMovie(id);
  q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(movie);
};

export const renderCategory = async (categoryId = null) => {
  const category = await loadCategory(categoryId);
  const movies = await loadMovies(categoryId);
  q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderCategories = () => {
  // missing implementation
};

const renderFavorites = () => {
  // missing implementation
};

const renderAbout = () => {
  // missing implementation
};
