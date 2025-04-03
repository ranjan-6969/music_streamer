// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <h1>Aurafy</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/playlist">Playlist</Link>
      <Link to="/profile">Profile</Link>
    </div>
  </nav>
);

export default Navbar;
