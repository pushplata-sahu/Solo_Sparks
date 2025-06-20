"use client";

import React, { useState } from "react";
import "../../../styles/profile.css";

export default function ProfilePage() {
  const [name, setName] = useState("Pushplata Sahu");
  const [email, setEmail] = useState("pushplata@example.com");
  const [mood, setMood] = useState("Excited 😄");

  const handleSave = () => {
    alert("Profile saved successfully!");
  };

  return (
    <div className="profile-container">
      <h1>Edit Profile</h1>
      <div className="profile-form">
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Mood:</label>
        <input value={mood} onChange={(e) => setMood(e.target.value)} />

        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}
