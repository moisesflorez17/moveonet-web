'use client';

import Image from 'next/image';
import styles from '../page.module.css';

export default function ServiciosPage() {
  return (
    <main className={styles.main}>
      {/* HEADER - Reutilizamos el mismo de la página de inicio */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a href="/" className={styles.logoLink} aria-label="Inicio Moveo Net SAS">
            <Image
              src="/logo-moveonet-dark.png"
              alt="Logo Moveo Net SAS"
              width={80}
              height={36}
              priority
              className={styles.logoImage}
            />
          </a>
          <nav className={styles.navDesktop} aria-label="Principal">
            <a href="/servicios" className={styles.navLink}>Servicios</a>
            <a href="/#contacto" className={styles.navLink}>Contacto</a>
            <a href="https://wa.me/573175021246" className={styles.ctaBtn}>Cotizar ahora</a>
          </nav>
        </div>
      </header>

      {/* CONTENIDO DE LA PÁGINA DE SERVICIOS */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Nuestros Servicios</h1>
          <p className={styles.heroDescription}>
            Ofrecemos soluciones tecnológicas avanzadas para conectar tu negocio y hogar.
          </p>
          {/* Aquí puedes añadir más contenido sobre los servicios */}
          <ul className={styles.heroList}>
            <li><span>✓</span><span>Internet Dedicado</span></li>
            <li><span>✓</span><span>Redes GPON</span></li>
            <li><span>✓</span><span>Wi-Fi de Alta Densidad</span></li>
          </ul>
        </div>
      </section>

      {/* FOOTER o sección de contacto (opcional, si lo quieres repetir) */}
    </main>
  );
}
