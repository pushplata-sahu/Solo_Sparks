"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState<string | null>(null);

  useEffect(() => {
    // Set path on client side to avoid hydration mismatch
    setActivePath(pathname);
  }, []);

  if (activePath === null) {
    // Optional: return null or loading spinner until client renders
    return null;
  }

  return (
    <nav className="navbar">
      <ul className="navlist">
        <li>
          <Link href="/" className={`nav-btn ${activePath === "/" ? "active" : ""}`}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={`nav-btn ${activePath === "/about" ? "active" : ""}`}>About</Link>
        </li>
        <li>
          <Link href="/contact" className={`nav-btn ${activePath === "/contact" ? "active" : ""}`}>Contact</Link>
        </li>
        <li>
          <Link href="/dashboard" className={`nav-btn ${activePath === "/dashboard" ? "active" : ""}`}>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
