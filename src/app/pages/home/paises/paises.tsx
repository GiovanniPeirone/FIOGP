import React from "react";
import styles from "./paises.module.css";

export const Marquee: React.FC = () => {
  const flags = [
    "/img/paises/descarga.png",
    "/img/paises/Flag_of_Mexico.png",
    "/img/paises/peru-CuHSR9na.jfif",
    "/img/paises/descarga (13).png",
    "/img/paises/descarga (12).png",
    "/img/paises/descarga (11).png",
    "/img/paises/descarga (10).png",
    "/img/paises/descarga (9).png",
    "/img/paises/descarga (8).png",
    "/img/paises/descarga (7).png",
    "/img/paises/descarga (6).png",
    "/img/paises/descarga (5).png",
    "/img/paises/descarga (4).png",
    "/img/paises/descarga (3).png",
    "/img/paises/descarga (2).png",
    "/img/paises/descarga (1).png",
    "/img/paises/512px-Bandera_de_España.png",
  ];

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {/* Primera tanda de imágenes */}
        <div className={styles.items}>
          {flags.map((src, i) => (
            <img key={i} src={src} alt={`pais-${i}`} />
          ))}
        </div>

        {/* Segunda tanda (duplicado para loop infinito sin corte) */}
        <div className={styles.items} aria-hidden="true">
          {flags.map((src, i) => (
            <img key={`dup-${i}`} src={src} alt={`pais-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
};