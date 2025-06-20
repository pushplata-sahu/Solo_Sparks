"use client";
import Link from "next/link";
import "../styles/navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="flex flex-row justify-center items-center gap-5 p-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
