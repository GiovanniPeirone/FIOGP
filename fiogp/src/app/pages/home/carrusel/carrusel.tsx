import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const images = [
  "/img/paises/descarga.png",
  "/img/paises/Flag_of_Mexico.png",
  "/img/paises/peru-CuHSR9na.jfif",
  "/img/paises/descarga (13).png",
  "/img/paises/descarga (12).png",
];

export const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={styles.carousel}>
      <button className={styles.navButton} onClick={prevImage}>
        ❮
      </button>

      <div className={styles.imageContainer}>
        <img src={images[currentIndex]} alt="carousel" />
      </div>

      <button className={styles.navButton} onClick={nextImage}>
        ❯
      </button>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;