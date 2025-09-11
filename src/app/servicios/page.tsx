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
          <h1 className={styles.heroTitle}>Nuestros Servicios de Conectividad</h1>
          <p className={styles.heroDescription}>
            En Moveonet, diseñamos e implementamos soluciones de conectividad robustas y escalables para empresas, eventos y el sector inmobiliario. Nos especializamos en redes de alta velocidad, garantizando una conexión fiable y segura en todo momento.
          </p>
          
          <ul className={styles.heroList}>
            <li>
              <span>✓</span>
              <span>
                **Redes de Fibra Óptica GPON**
                <br />
                Somos expertos en el diseño e instalación de **redes GPON** (Gigabit Passive Optical Network). Esta tecnología de fibra óptica es ideal para proporcionar servicios de internet, voz y video con velocidades simétricas y gran estabilidad, perfecta para la **red troncal de hoteles, edificios de oficinas y conjuntos residenciales**.
              </span>
            </li>
            <li>
              <span>✓</span>
              <span>
                **Conectividad Temporal para Eventos**
                <br />
                Ofrecemos soluciones de internet dedicadas y de alta densidad para **eventos, conciertos, conferencias y ferias**. Nos encargamos de toda la instalación, garantizando una conexión estable y de alto rendimiento que soporta la gran afluencia de usuarios, permitiendo la transmisión en vivo y el uso de múltiples dispositivos sin interrupciones.
              </span>
            </li>
            <li>
              <span>✓</span>
              <span>
                **Soluciones de Conectividad para Infraestructura**
                <br />
                Desarrollamos proyectos a medida para dotar de internet de alta velocidad a **hoteles, torres de apartamentos, edificios de oficinas y conjuntos residenciales**. Nuestra experiencia nos permite implementar redes seguras y estables que aumentan la plusvalía de las propiedades y mejoran la experiencia de sus residentes y usuarios.
              </span>
            </li>
            <li>
              <span>✓</span>
              <span>
                **Interconexión de Oficinas y Puntos de Venta**
                <br />
                Creamos redes privadas y seguras para conectar múltiples sedes, oficinas remotas o puntos de venta de una misma empresa. Mediante **radioenlaces, fibra óptica o soluciones VPN**, garantizamos una comunicación fluida y segura entre todas tus ubicaciones, facilitando el intercambio de información y la gestión centralizada de recursos.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* FOOTER - Puedes agregar el pie de página aquí si es necesario */}
    </main>
  );
}
