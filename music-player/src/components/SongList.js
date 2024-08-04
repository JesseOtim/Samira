// src/components/SongList.js
import React from 'react';

function SongList({ songs, setCurrentSong }) {
  return (
    <div className="song-list">
      <h2>Song List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id} onClick={() => setCurrentSong(song)}>
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
