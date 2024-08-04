// src/components/Player.js
import React, { useRef } from 'react';

function Player({ currentSong }) {
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="player">
      <h2>Now Playing: {currentSong.title}</h2>
      <audio ref={audioRef} src={currentSong.src} controls />
      <button onClick={handlePlayPause}>Play/Pause</button>
    </div>
  );
}

export default Player;
