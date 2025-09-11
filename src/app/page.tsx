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

      {/* HERO */}
      <section id="top" className={styles.hero} aria-label="Presentación">
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Internet dedicado para eventos, conciertos, hoteles, torres residenciales y más
          </h1>
          <p className={styles.heroDescription}>
            Ofrecemos soluciones de internet por fibra óptica. Especialistas en redes GPON para
            eventos, conciertos, hoteles, edificios de oficinas, conjuntos residenciales e internet
            satelital.
          </p>
          <ul id="servicios" className={styles.heroList}>
            <li><span>✓</span><span>Redes GPON</span></li>
            <li><span>✓</span><span>Wi-Fi de alta densidad</span></li>
            <li><span>✓</span><span>Radioenlaces y respaldo satelital</span></li>
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
