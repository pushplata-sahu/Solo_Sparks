"use client";

import Link from "next/link";
import "../../../styles/logout.css";

export default function LogoutPage() {
  return (
    <div className="logout-container">
      <h1>🚪 You have been logged out</h1>
      <p>Thank you for using Solo Sparks 🌟</p>
      <Link href="/">
        <button className="logout-btn">Go to Home</button>
      </Link>
    </div>
  );
}
