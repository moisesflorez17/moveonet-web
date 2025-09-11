export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/concert-night-bg.jpg')" }}
    >
      {/* Capa negra semitransparente para mejorar la visibilidad del texto */}
      <div className="bg-black bg-opacity-70 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        
        {/* Logo */}
        <img
          src="/logo-moveonet-dark.png"
          alt="MoveoNet Logo"
          className="w-48 mb-8"
        />

        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Internet dedicado para eventos, conciertos, hoteles,
          torres residenciales y más
        </h1>

        {/* Descripción */}
        <p className="mt-6 text-lg max-w-3xl">
          Ofrecemos soluciones de internet por fibra óptica. 
          Especialistas en redes GPON para eventos, conciertos, hoteles, 
          edificios de oficinas, conjuntos residenciales e internet satelital.
        </p>

        {/* Lista de servicios */}
        <ul className="mt-6 space-y-2 text-lg">
          <li>✔ Redes GPON</li>
          <li>✔ Wi-Fi de alta densidad</li>
          <li>✔ Radioenlaces y respaldo satelital</li>
        </ul>

        {/* Botón de acción */}
        <a
          href="https://wa.me/573016278381"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
          Solicitar cotización en WhatsApp
        </a>
      </div>
    </main>
  );
}
