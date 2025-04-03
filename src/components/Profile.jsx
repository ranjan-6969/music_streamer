import React from "react";
import profileImage from "../assets/image.jpg"; // Ensure image is in /src/assets

const Profile = ({ username }) => (
  <div className="profile">
    <h2>🎵 "Your Sound, Your Story."</h2>
    <img src={profileImage} alt="Profile" className="profile-image" />
    <p>Username: {username}</p>
    <p>Subscription: Premium</p>

    <style jsx="true">{`
      .profile-image {
        width: 80px; /* Reduced size */
        height: 80px;
        border-radius: 50%; /* Circular shape */
        object-fit: cover; /* Maintain aspect ratio */
      }
    `}</style>
  </div>
);

export default Profile;
