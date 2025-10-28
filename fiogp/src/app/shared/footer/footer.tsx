import React from "react";
import styles from "./footer.module.css";
import Languaje from "../languaje/languaje";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Parte superior con SVG curvo */}
      <div className={styles.topFooter}>
        {/* SVG curvado como fondo */}
        <svg
          className={styles.svgBackground}
          viewBox="0 0 1920 579"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 49.3309C671.807 28.8524 861.532 -71.8969 1920 92.2771V579H0V49.3309Z"
            fill="#508C9B"
          />
        </svg>

        <div className={styles.content}>
          <img src="/icon.png" alt="icon" className={styles.logo} />
          <h1 className={styles.title}>F.I.O.G.P</h1>

          <div className={styles.socials}>
            <a href="">
              <img src="/Instagram.png" alt="Instagram" />
            </a>
            <a href="">
              <img src="/Facebook.png" alt="Facebook" />
            </a>
          </div>

          <div className={styles.langWrapper}>
            <Languaje />
          </div>
        </div>
      </div>

      {/* Parte inferior con derechos */}
      <div className={styles.bottomFooter}>
        <p>
          © 2024 <span className={styles.brand}>CERIX</span> – Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}