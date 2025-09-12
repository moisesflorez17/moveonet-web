'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <main className={styles.main}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a href="#top" className={styles.logoLink} aria-label="Inicio Moveo Net SAS">
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
            <a href="#contacto" className={styles.navLink}>Contacto</a>
            <a href="https://wa.me/573175021246" className={styles.ctaBtn}>Cotizar ahora</a>
          </nav>

          <button
            className={styles.burger}
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>

        <nav className={`${styles.navMobile} ${open ? styles.navMobileOpen : ''}`} aria-label="Menú móvil">
          <a href="/servicios" className={styles.navMobileLink}>Servicios</a>
          <a href="#contacto" className={styles.navMobileLink}>Contacto</a>
          <a href="https://wa.me/573175021246" className={styles.navMobileCTA}>Cotizar ahora</a>
        </nav>
      </header>

      {/* SECCIÓN PRINCIPAL CON IMÁGENES SUPERPUESTAS */}
      <section id="top" className={styles.contentSection} aria-label="Internet de alta velocidad para eventos y más">
        {/* Capa de fondo con imagen del concierto */}
        <div className={styles.backgroundImageBottom} />
        {/* Capa de fondo con imagen de fibras ópticas */}
        <div className={styles.backgroundImageTop} />
        {/* Capa de degradado oscuro */}
        <div className={styles.contentOverlay} />

        <div className={styles.contentWrapper}>
          <h1 className={styles.sectionTitle}>
            Internet dedicado para eventos, conciertos, hoteles, torres residenciales y más
          </h1>
          <p className={styles.sectionSubtitle}>
            Ofrecemos soluciones de internet por fibra óptica. Especialistas en redes GPON para eventos, concierto, hoteles, edificios de oficinas, conjuntos residenciales e internet satelital.
          </p>

          <ul className={styles.featuresList}>
            <li>
              <span className={styles.checkIcon}>✓</span> Redes GPON
            </li>
            <li>
              <span className={styles.checkIcon}>✓</span> Wi-Fi de alta densidad
            </li>
            <li>
              <span className={styles.checkIcon}>✓</span> Radioenlaces y respaldo satelital
            </li>
          </ul>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className={styles.contactSection} aria-label="Contacto">
        <div className={styles.contactContent}>
          <h2 className={styles.contactTitle}>Contacto</h2>
          <p className={styles.contactDescription}>Escríbenos y te respondemos de inmediato.</p>
          <div className={styles.contactDetails}>
            <a href="mailto:intermoveonet@gmail.com" className={styles.contactLink}>intermoveonet@gmail.com</a>
            <a href="tel:+573175021246" className={styles.contactLink}>+57 317 502 1246</a>
          </div>
        </div>
      </section>
    </main>
  );
}
