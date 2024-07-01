import React, { useState } from 'react';
import Playlists from './components/Playlists';
import Search from './components/Search';
import Player from './components/Player';
import Albums from './components/Albums';
import Genres from './components/Genres';
import './App.css'; // Make sure to include a CSS file for basic styling

function App() {
  const [currentTrack, setCurrentTrack] = useState(null); // State for current playing track

  const playTrack = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="App">
      <h1>Spotify 2.0 Clone</h1>
      <Search />
      <div className="main-content">
        <Playlists playTrack={playTrack} />
        <Albums playTrack={playTrack} />
        <Genres playTrack={playTrack} />
      </div>
      {currentTrack && <Player track={currentTrack} />}
    </div>
  );
}

export default App;


