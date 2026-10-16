"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./carrusel.module.css"; // 👈 Import del CSS module

const images = [
  "/img/fondo3-BBAzQlpe.png",
  "/img/fondo6-DjrFhEzT.jpg",
  "/img/foro2-CQA-e711.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={styles.carouselContainer}>
      {/* Imagen */}
      <div className={styles.carouselImage}>
        <img src={images[current]} alt="imagen" />
      </div>

      {/* Controles */}
      <div className={styles.carouselControls}>
        <button onClick={prev} className={styles.carouselBtn}>
          <ChevronLeft width={24} height={20} />
        </button>

        {/* Puntos indicadores */}
        <div className={styles.carouselDots}>
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`${styles.dot} ${i === current ? styles.active : ""}`}
            />
          ))}
        </div>

        <button onClick={next} className={styles.carouselBtn}>
          <ChevronRight  width={24} height={20}/>
        </button>
      </div>
    </div>
  );
}