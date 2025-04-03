import React from "react";
import SongCard from "./SongCard";
import image1 from "../assets/image.png";
import lifeOfRam from "../assets/music/life_of_ram.mp3"; // Correct file import

const Home = ({ setPlaylist, playlist, setCurrentSong }) => {
  const songs = [
    {
      id: 1,
      title: "Blinding Lights",
      src: lifeOfRam,
      image: image1,
      category: "Pop",
    },
    {
      id: 2,
      title: "Someone Like You",
      src: lifeOfRam,
      image: image1,
      category: "Sad",
    },
    {
      id: 3,
      title: "Shape of You",
      src: lifeOfRam,
      image: image1,
      category: "Pop",
    },
    {
      id: 4,
      title: "Bohemian Rhapsody",
      src: lifeOfRam,
      image: image1,
      category: "Rock",
    },
    {
      id: 5,
      title: "Lose Yourself",
      src: lifeOfRam,
      image: image1,
      category: "Rap",
    },
    {
      id: 6,
      title: "Perfect",
      src: lifeOfRam,
      image: image1,
      category: "Romantic",
    },
    {
      id: 7,
      title: "Happier",
      src: lifeOfRam,
      image: image1,
      category: "Sad",
    },
    {
      id: 8,
      title: "Counting Stars",
      src: lifeOfRam,
      image: image1,
      category: "Pop",
    },
    {
      id: 9,
      title: "Believer",
      src: lifeOfRam,
      image: image1,
      category: "Rock",
    },
    {
      id: 10,
      title: "Memories",
      src: lifeOfRam,
      image: image1,
      category: "Chill",
    },
  ];

  return (
    <div className="home-page" style={{ overflowY: "auto", maxHeight: "80vh", paddingBottom: "150px" }}>
      <h2>🎵 "Feel the Beat, Live the Moment!"</h2>
      <div className="song-grid">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            setPlaylist={setPlaylist}
            playlist={playlist}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
