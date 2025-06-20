"use client";

import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.css";

export default function Home() {
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
                <h2>Already on a Growth Journey?</h2>
                <p>
                  Log in to access your personalized quests and progress
                  dashboard.
                </p>
                <Link href="/login">
                  <button>Login</button>
                </Link>
              </div>

              <div className="card">
                <h2>New Here? Start Growing</h2>
                <p>
                  Create your free account to get tailored self-growth
                  activities and earn spark points!
                </p>
                <Link href="/signup">
                  <button>Sign Up</button>
                </Link>
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
