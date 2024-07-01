import React from 'react';

const Genres = ({ playTrack }) => {
  const genres = [
    'Pop',
    'Rock',
    'Hip Hop',
    'Electronic',
    'Indie',
  ];

  return (
    <div className="genres-section">
      <h2>Genres</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre} onClick={() => playTrack({ name: `${genre} Playlist`, artist: 'Various Artists' })}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
