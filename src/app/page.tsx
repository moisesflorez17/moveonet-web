import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        {/* Aquí va el logo de Moveo Net SAS */}
        <div className={styles.logo}>
          <Image
            src="/logo-moveonet-dark.png"
            alt="Logo Moveo Net SAS"
            width={150}
            height={50}
            priority
          />
        </div>
        <nav className={styles.nav}>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
          <button className={styles.cotizarBtn}>Cotizar ahora</button>
        </nav>
      </header>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Internet dedicado para eventos, conciertos, hoteles, torres residenciales y más
          </h1>
          <p className={styles.heroDescription}>
            Ofrecemos soluciones de internet por fibra óptica. Especialistas en redes GPON para
            eventos, conciertos, hoteles, edificios de oficinas, conjuntos residenciales e internet
            satelital.
          </p>
          <ul className={styles.heroList}>
            <li>✓ Redes GPON</li>
            <li>✓ Wi-Fi de alta densidad</li>
            <li>✓ Radioenlaces y respaldo satelital</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
