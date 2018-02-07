import React from 'react';

const MovieList = ({ list }) => (
  <div>
    <h1>MovieList</h1>
    <ul>
    {list.map(movie =>(
      <li key={movie.id}>{movie.title}</li>
    ))}
    </ul>
  </div>
)

export default MovieList;
