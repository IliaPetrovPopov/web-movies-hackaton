import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;

export const toSingleMovieView = (movie) => toMovieDetailed(movie);

export const toMovieSimple = (movie) => `
<div class="movie-simple movie-link" data-movie-id="${movie.id}">
  <div class="title-class">
    <h1>${movie.title}</h1>
    <p>${movie.year}</p>
  </div>
  <div class="img-container">
    <img src="${movie.poster}" alt="${movie.title} poster">
  </div>
  <div class="under-img">
  <button class="movie-details-button" data-category = ${
    movie.id
  }>View Details</button>
  ${renderFavoriteStatus(movie.id)}</div>

  </div>
`;

const toMovieDetailed = (movie) => `
<div id="movie-attributes">
    <h2>${movie.title} (${movie.year})</h2>

    <div class="movie-details">
      <div id="film-info">
        <p>Genre: ${movie.genre} </p>
        <p>Director: ${movie.director} </p>
        <p>Staring: ${movie.stars.slice().join(', ')} </p>
        <p>Plot: ${movie.description} </p>
      </div>

      <img src="${movie.poster}" alt="${movie.title}">
    </div>
</div>
`;
