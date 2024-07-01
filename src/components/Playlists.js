import React from 'react';

const Playlists = ({ playTrack }) => {
  const playlists = [
    {
      id: 1,
      name: 'Chill Vibes',
      tracks: [
        { id: 101, name: 'Lofi Chill', artist: 'DJ Chill' },
        { id: 102, name: 'Relaxing Beats', artist: 'Smooth Sound' },
      ],
    },
    {
      id: 2,
      name: 'Workout Mix',
      tracks: [
        { id: 201, name: 'Pump It Up', artist: 'Fit Beats' },
        { id: 202, name: 'Energy Booster', artist: 'Workout Crew' },
      ],
    },
  ];

  return (
    <div className="playlist-section">
      <h2>Playlists</h2>
      {playlists.map((playlist) => (
        <div key={playlist.id} className="playlist" onClick={() => playTrack(playlist.tracks[0])}>
          <h3>{playlist.name}</h3>
          <p>{playlist.tracks.length} tracks</p>
        </div>
      ))}
    </div>
  );
};

export default Playlists;
