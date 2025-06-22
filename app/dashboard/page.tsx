"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import "../../styles/dashboard.css";

export default function Dashboard() {
  // Optional: Close sidebar on outside click (for better UX)
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const sidebar = document.querySelector(".dashboard-sidebar");
      if (
        sidebar &&
        sidebar.classList.contains("open") &&
        !sidebar.contains(e.target) &&
        !e.target.classList.contains("hamburger")
      ) {
        sidebar.classList.remove("open");
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".dashboard-sidebar");
    sidebar.classList.toggle("open");
  };

  return (
    <div className="dashboard-layout">
      {/* Mobile Header with Hamburger */}
      <header className="dashboard-header">
        <h2>🌟 Solo Sparks</h2>
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
      </header>

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <h2>🌟 Solo Sparks</h2>
        <ul>
          <li>
            <Link href="/dashboard">🏠 Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/profile">👤 Profile</Link>
          </li>
          <li>🧠 Psychology</li>
          <li>🧩 Quests</li>
          <li>📝 Reflections</li>
          <li>🌟 Spark Points</li>
          <li>🎁 Rewards</li>
          <li>📊 Analytics</li>
          <li>
            <Link href="/dashboard/logout">🚪 Logout</Link>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="dashboard-main">
        <h1 className="dashboard-heading">
          Powering Up Your Personal Growth Hub!
        </h1>
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>🧠 User Psychology Profiling</h3>
            <p>
              Track mood, personality traits, emotional needs, and past quest
              responses.
            </p>
          </div>

          <div className="dashboard-card">
            <h3>🧩 Intelligent Quest Engine</h3>
            <p>
              Get personalized daily, weekly, and monthly quests based on your
              profile.
            </p>
          </div>

          <div className="dashboard-card">
            <h3>📸 Multi-Media Reflection</h3>
            <p>
              Store reflections as text, images, or audio to capture your
              emotional journey.
            </p>
          </div>

          <div className="dashboard-card">
            <h3>🌟 Spark Points Economy</h3>
            <p>
              Earn points through quests with rules for earning and redeeming
              progress boosts.
            </p>
          </div>

          <div className="dashboard-card">
            <h3>🎁 Reward System</h3>
            <p>
              Manage hidden content, profile boosts, and surprise tokens as
              rewards.
            </p>
          </div>

          <div className="dashboard-card">
            <h3>📊 Behavioral Analytics</h3>
            <p>
              Track user patterns, completion rates, and emotional growth
              indicators.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
