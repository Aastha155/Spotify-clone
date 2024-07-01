import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Implement search functionality (e.g., filter playlists, albums, etc.)
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for songs, albums, artists..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
