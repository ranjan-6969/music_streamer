import React, { useRef, useState } from "react";

const SongCard = ({ song, setPlaylist, playlist, setCurrentSong, onRemove }) => {
  const audioRef = useRef(new Audio()); // Single audio instance
  const [isPlaying, setIsPlaying] = useState(false);

  const addToPlaylist = () => {
    if (!playlist.some((item) => item.id === song.id)) {
      setPlaylist([...playlist, song]);
    }
  };

  const playSong = () => {
    if (audioRef.current.src !== song.src) {
      audioRef.current.pause(); // Stop any previously playing song
      audioRef.current = new Audio(song.src); // Assign new audio source
      setCurrentSong(song);
    }

    if (audioRef.current.paused) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error("Audio play error:", error));
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="song-card">
      <img src={song.image} alt={song.title} className="song-image" />
      <h3>{song.title}</h3>
      <button onClick={playSong}>{isPlaying ? "⏸ Pause" : "▶ Play"}</button>
      {onRemove ? (
        <button onClick={() => onRemove(song.id)}>❌ Remove</button>
      ) : (
        <button onClick={addToPlaylist}>➕ Add to Playlist</button>
      )}
    </div>
  );
};

export default SongCard;
