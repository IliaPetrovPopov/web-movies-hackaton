import {
  ABOUT,
  CONTAINER_SELECTOR,
  HOME,
  FAVORITES,
  CATEGORIES,
} from '../common/constants.js';
import { toHomeView } from '../views/home-view.js';
import { toMoviesFromCategoryView } from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';
import { toCategoriesView } from '../views/category-view.js';
import { loadCategories } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { getFavorites } from '../../src/data/favorites.js';
import { getMovieById } from '../../src/data/movies.js';
import { loadSingleMovie } from '../requests/request-service.js';
import { toSingleMovieView } from '../views/movie-views.js';
import { loadCategory } from '../requests/request-service.js';
import { loadMovies } from '../requests/request-service.js';

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

const renderCategories = async () => {
  const categories = await loadCategories();
  q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(categories);
};

const renderFavorites = () => {
  const favoriteMoviesIDs = getFavorites();
  const favoriteMovies = favoriteMoviesIDs.map((id) => getMovieById(id));

  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoriteMovies);
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
