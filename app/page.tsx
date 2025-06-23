"use client";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import "../styles/globals.css";

export default function Home() {
  const [showForm, setShowForm] = useState<"none" | "login" | "signup">("none");

  return (
    <>
      <Head>
        <title>Solo Sparks</title>
        <meta name="description" content="Personal growth quest system" />
        <meta
          name="keywords"
          content="nextjs, solo sparks, growth, self-awareness"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className="layout">
        <div className="container">
          <main className="main">
            <h1 className="h1">Solo Sparks</h1>
            <p className="p">Your Personal Growth Playground</p>
            <p className="p">
              Your journey to emotional intelligence begins here!!
            </p>

            <div className="section">
              <div className="card">
                <h2>Welcome to Solo Sparks!</h2>
                <p>Start your personal growth journey today 🌱</p>
                <p>
                  Already have an account? Log in to continue your quests and
                  earn Spark Points!
                </p>
                <p>
                  New here? Sign up to begin your personalized self-growth
                  adventure.
                </p>

                <div className="btn">
                  <Link href="/login">
                    <button>Login</button>
                  </Link>
                  <Link href="/signup">
                    <button>Sign Up</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="features-clean">
              <h2 className="features-heading">Why Choose Solo Sparks?</h2>
              <p className="features-subtitle">
                We believe self-growth should be exciting, personal, and
                rewarding. Here’s what makes us different:
              </p>
              <ul className="features-list">
                <li>Personalized Quests tailored to your goals</li>
                <li>Track your daily progress and earn Spark Points</li>
                <li>Boost your self-awareness with daily prompts</li>
                <li>Visualize your growth with easy dashboards</li>
                <li>Gamified experience — self-growth made fun!</li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
