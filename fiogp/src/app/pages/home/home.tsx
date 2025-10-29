import React from "react";
import styles from "./home.module.css";

export const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      {/* Header */}
      <header className={styles.header}>
        <h1>
          FORO IBEROAMERICANO DE ORGANIZACIONES GASTRONÓMICAS PROFESIONALES
        </h1>
        <img src="/img/logo.png" alt="Logo Foro" className={styles.logo} />
      </header>

      {/* Introducción */}
      <section className={styles.intro}>
        <img src="/img/director.jpg" alt="Director" className={styles.introImg} />
        <div className={styles.introText}>
          <h3>Organización con 27 años de trayectoria</h3>
          <p>
            Buscamos elevar el estándar de la preparación de alimentos y bebidas
            en América y Europa. Nuestro programa combina experiencia laboral y
            estudios formales, dictados por profesionales de amplia trayectoria.
          </p>
        </div>
      </section>

      {/* Certificados */}
      <section className={styles.certificados}>
        <h2>Certificados</h2>
        <p className={styles.subtitulo}>Más de 30 provincias con certificación</p>

        <div className={styles.certificadosLista}>
          <div className={styles.certificadoItem}>
            <img src="/img/icon-chef.png" alt="Chefs" />
            <p>Chefs Certificados</p>
          </div>
          <div className={styles.certificadoItem}>
            <img src="/img/icon-restaurant.png" alt="Restaurantes" />
            <p>Restaurantes Certificados</p>
          </div>
          <div className={styles.certificadoItem}>
            <img src="/img/icon-school.png" alt="Escuelas" />
            <p>Escuelas Certificadas</p>
          </div>
        </div>

        <div className={styles.certificadosExtra}>
          <img src="/img/evento.jpg" alt="Evento" />
          <p>
            Viví más sobre nuestras <br />
            ofertas académicas.
          </p>
        </div>
      </section>

      {/* Representantes */}
      <section className={styles.representantes}>
        <h2>Nuestros Representantes</h2>
        <p>Presencia en 17 países de América y Europa</p>
        <img src="/img/mapa.png" alt="Mapa de representantes" className={styles.mapa} />
      </section>

      {/* Contacto */}
      <section className={styles.contacto}>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <input type="text" placeholder="Nombre" className={styles.input} />
            <input type="text" placeholder="Apellido" className={styles.input} />
          </div>
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea placeholder="Mensaje" className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>Enviar Mensaje</button>
        </form>
        <img src="/img/contacto.jpg" alt="Contacto" className={styles.contactoImg} />
      </section>
    </div>
  );
};

export default Home;