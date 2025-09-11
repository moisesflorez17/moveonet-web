export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Fondo concierto visible */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/concert-night-bg.jpg?v=8')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlay para legibilidad */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.85), rgba(10,42,74,.45), rgba(0,0,0,.92))",
        }}
      />

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#0a2a4a]/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/logo-moveonet-dark.png?v=8"
              alt="Moveo Net SAS"
              className="h-9 w-auto object-contain"
            />
            <span className="font-semibold text-white text-lg">Moveo Net SAS</span>
          </a>
          <nav className="ml-auto hidden md:flex items-center gap-8 text-sm text-white/90">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
          <a
            href="#contacto"
            className="ml-3 hidden sm:inline-flex items-center px-4 py-2 rounded-xl bg-sky-700 text-white text-sm hover:bg-sky-800"
          >
            Cotizar ahora
          </a>
        </div>
      </header>

      {/* CONTENIDO */}
      <div className="relative z-10">
        <section id="top" className="max-w-6xl mx-auto px-4 pt-32 pb-16 md:pt-36 text-left">
          <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Internet dedicado para eventos, conciertos, hoteles,
            torres residenciales y más
          </h1>

          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/90">
            Ofrecemos soluciones de internet por fibra óptica. Especialistas en redes
            GPON para eventos, conciertos, hoteles, edificios de oficinas, conjuntos
            residenciales e internet satelital.
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

        <section id="contacto" className="max-w-6xl mx-auto px-4 pb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Contacto</h2>
          <p className="text-white/80">Escríbenos y te respondemos de inmediato.</p>
          <div className="mt-4 grid sm:grid-cols-2 gap-3 text-white/90">
            <a href="mailto:intermoveonet@gmail.com" className="underline">intermoveonet@gmail.com</a>
            <a href="tel:+573175021246" className="underline">+57 317 502 1246</a>
          </div>
        </section>
      </div>
    </main>
  );
}
