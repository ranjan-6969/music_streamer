// src/components/MusicPlayer.jsx
import React, { useRef, useEffect } from "react";

const MusicPlayer = ({ song }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (song) {
      audioRef.current.src = song.src;
      audioRef.current.play();
    }
  }, [song]);

  return (
    <div className="music-player">
      <p>Now Playing: {song?.title}</p>
      <audio ref={audioRef} controls />
    </div>
  );
};

export default MusicPlayer;
