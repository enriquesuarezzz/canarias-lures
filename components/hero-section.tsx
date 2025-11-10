import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: "url(/hero-fishing-professional.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-white">
          <p className="text-lg font-semibold mb-2">La Resistencia es Inútil</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bienvenido a
            <br />
            Canarias Lures
          </h1>
          <Button className="bg-[#4287f5] text-white hover:bg-[#3168d4] font-bold px-8 py-3 text-base">
            COMPRAR AHORA
          </Button>
        </div>
      </div>
    </section>
  )
}
