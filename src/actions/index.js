export const ADD_MOVIE = 'ADD_MOVIE';

export function addMovieList(title) {
  return {
    type: ADD_MOVIE,
    title
  }
}
