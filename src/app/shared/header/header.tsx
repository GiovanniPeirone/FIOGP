"use client";

import { useState } from "react";
import styles from "./header.module.css";
import Languaje from "../languaje/languaje";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className={styles.header}>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`${styles.menu} ${menuOpen ? styles.open : ""}`}
        >
          <div>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </div>

          <div>
            <a href="/contact" onClick={() => setMenuOpen(false)}>
              Contactanos
            </a>
          </div>

          <div>
            <Languaje />
          </div>
        </div>
      </nav>
    </header>
  );
}
