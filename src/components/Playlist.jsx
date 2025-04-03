// src/components/Playlist.jsx
import React from "react";
import SongCard from "./SongCard";

const Playlist = ({ playlist, setPlaylist, setCurrentSong }) => {
  const removeSong = (id) => {
    setPlaylist(playlist.filter((song) => song.id !== id));
  };

  return (
    <div className="playlist-page" style={{ paddingBottom: '100px' }}>
      <h2>🎵 "Your Playlist, Your Rhythm!"</h2>
      <div className="song-grid">
        {playlist.map((song) => (
          <SongCard key={song.id} song={song} setCurrentSong={setCurrentSong} onRemove={removeSong} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
