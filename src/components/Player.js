import React from 'react';

const Player = ({ track }) => {
  return (
    <div className="player">
      <h3>Now Playing</h3>
      <p>{track.name} - {track.artist}</p>
      {/* Add player controls (play, pause, skip) */}
    </div>
  );
};

export default Player;
