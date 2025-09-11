export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Fondo concierto con style (seguro) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage: "url('/concert-night-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Textura de fibras encima */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/fibers-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          opacity: 0.4,
        }}
      />
      {/* Overlay sombrío azulado para legibilidad */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.85), rgba(10,42,74,.55), rgba(0,0,0,.9))",
        }}
      />

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#0a2a4a]/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo-moveonet-dark.png" alt="Moveo Net SAS" className="w-9 h-9 object-contain" />
            <span className="font-semibold text-white text-lg">Moveo Net SAS</span>
          </a>
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm text-white/90">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
          <a href="#contacto" className="ml-3 inline-flex items-center px-4 py-2 rounded-xl bg-sky-700 text-white text-sm hover:bg-sky-800">
            Cotizar ahora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative max-w-6xl mx-auto px-4 pt-28 pb-16 text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Internet dedicado para eventos, conciertos, hoteles,
          <br className="hidden md:block" />
          torres residenciales y más
        </h1>

        <p className="mt-5 max-w-3xl text-lg md:text-xl text-white/90">
          Ofrecemos soluciones de internet por fibra óptica. Especialistas en redes GPON para
          eventos, conciertos, hoteles, edificios de oficinas, conjuntos residenciales e internet satelital.
        </p>

        <ul id="servicios" className="mt-6 space-y-2 text-white/95">
          <li className="flex items-start gap-3"><span className="mt-1">✓</span><span>Redes GPON</span></li>
          <li className="flex items-start gap-3"><span className="mt-1">✓</span><span>Wi-Fi de alta densidad</span></li>
          <li className="flex items-start gap-3"><span className="mt-1">✓</span><span>Radioenlaces y respaldo satelital</span></li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contacto" className="inline-flex items-center px-5 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800">
            Solicitar cotización
          </a>
          <a href="https://wa.me/573175021246" className="inline-flex items-center px-5 py-2.5 rounded-xl border border-white/30 hover:bg-white/10">
            WhatsApp
          </a>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Contacto</h2>
        <p className="text-white/80">Escríbenos y te respondemos de inmediato.</p>
        <div className="mt-4 grid sm:grid-cols-2 gap-3 text-white/90">
          <a href="mailto:intermoveonet@gmail.com" className="underline">intermoveonet@gmail.com</a>
          <a href="tel:+573175021246" className="underline">+57 317 502 1246</a>
        </div>
      </section>
    </main>
  );
}
