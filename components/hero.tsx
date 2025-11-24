import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/header.jpg"
          alt="Canarias Lures - Pesca deportiva en Lanzarote"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Domina el Arte de la Pesca
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light mb-8 text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Los mejores señuelos y equipos para tu próxima aventura
        </p>
        <a
          href="#productos"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
        >
          Explorar Productos
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
