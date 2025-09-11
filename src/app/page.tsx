import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a href="#top" className={styles.logoLink}>
            <Image
              src="/logo-moveonet-dark.png"
              alt="Logo Moveo Net SAS"
              width={160}
              height={40}
              priority
              className={styles.logoImage}
            />
          </a>

          <nav className={styles.nav}>
            <a href="#servicios" className={styles.navLink}>Servicios</a>
            <a href="#contacto" className={styles.navLink}>Contacto</a>
            <button className={styles.cotizarBtn}>Cotizar ahora</button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="top" className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Internet dedicado para eventos, conciertos, hoteles, torres residenciales y más
          </h1>
          <p className={styles.heroDescription}>
            Ofrecemos soluciones de internet por fibra óptica. Especialistas en redes GPON para
            eventos, conciertos, hoteles, edificios de oficinas, conjuntos residenciales e internet
            satalelital.
          </p>
          <ul id="servicios" className={styles.heroList}>
            <li><span>✓</span><span>Redes GPON</span></li>
            <li><span>✓</span><span>Wi-Fi de alta densidad</span></li>
            <li><span>✓</span><span>Radioenlaces y respaldo satelital</span></li>
          </ul>
        </div>
      </section>

      {/* CONTACTO SECTION */}
      <section id="contacto" className={styles.contactSection}>
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
