import React from 'react';

function GenreFilter({ genres, onSelectGenre }) {
  return (
    <div className="genre-filter">
      <h2>Filter by Genre:</h2>
      <div className="genre-buttons">
        {genres.map((genre, index) => (
          <button key={index} onClick={() => onSelectGenre(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
