import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Playlist from "./components/Playlist";
import Auth from "./components/Auth";
import MusicPlayer from "./components/MusicPlayer";
import Profile from "./components/Profile";
import "./styles/app.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [username, setUsername] = useState("");

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Home setPlaylist={setPlaylist} playlist={playlist} setCurrentSong={setCurrentSong} />
              ) : (
                <Auth setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />
              )
            }
          />
          <Route
            path="/playlist"
            element={
              isAuthenticated ? (
                <Playlist playlist={playlist} setPlaylist={setPlaylist} setCurrentSong={setCurrentSong} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <Profile username={username} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
        {isAuthenticated && currentSong && <MusicPlayer song={currentSong} />}
      </div>
    </Router>
  );
};

export default App;