"use client";
import "../styles/components.css";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre Mí" },
  { href: "/projects", label: "Proyectos" },
  { href: "/comments", label: "Comentarios" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link href="/" className="brand-link">
            Yosimar
          </Link>
        </div>

        <button
          className="navbar-hamburger"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <ul className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
