import React from 'react';

const Albums = ({ playTrack }) => {
  const albums = [
    {
      id: 1,
      name: 'Summer Hits',
      artist: 'Various Artists',
      cover: 'https://via.placeholder.com/150', // Replace with actual URL
      tracks: [
        { id: 301, name: 'Summer Song 1', artist: 'Artist A' },
        { id: 302, name: 'Summer Song 2', artist: 'Artist B' },
      ],
    },
    {
      id: 2,
      name: 'Best of Rock',
      artist: 'Various Artists',
      cover: 'https://via.placeholder.com/150', // Replace with actual URL
      tracks: [
        { id: 401, name: 'Rock Song 1', artist: 'Band A' },
        { id: 402, name: 'Rock Song 2', artist: 'Band B' },
      ],
    },
  ];

  return (
    <div className="albums-section">
      <h2>Albums</h2>
      {albums.map((album) => (
        <div key={album.id} className="album" onClick={() => playTrack(album.tracks[0])}>
          <img src={album.cover} alt={album.name} />
          <h3>{album.name}</h3>
          <p>{album.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default Albums;
