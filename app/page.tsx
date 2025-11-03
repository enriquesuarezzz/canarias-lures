import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Fish, Waves, Shield, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('/water-ripples-texture.jpg')] opacity-[0.01] bg-cover bg-center" />
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-balance leading-tight text-slate-900">
                Canarias Lures
              </h1>
              <p className="text-base md:text-lg text-slate-600 text-pretty leading-relaxed max-w-lg">
                Colección exclusiva de señuelos profesionales diseñados por expertos y probados en las mejores aguas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="text-base px-6 md:px-8 h-11 md:h-12 w-full sm:w-auto bg-primary hover:bg-primary/90"
                >
                  <Link href="/productos">Ver Catálogo</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base px-6 md:px-8 h-11 md:h-12 bg-white w-full sm:w-auto border-slate-300 hover:bg-slate-50"
                >
                  <Link href="/contacto">Contactar</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[250px] md:h-[350px] lg:h-[450px]">
              <div className="absolute inset-0 bg-slate-100 rounded-xl" />
              <Image
                src="/fishing-lures-collection-professional.jpg"
                alt="Colección de señuelos de pesca"
                fill
                className="object-cover rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-3">Por Qué Elegirnos</h2>
            <p className="text-base md:text-lg text-slate-600">
              Calidad profesional respaldada por más de 10 años de experiencia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Fish className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Calidad Premium</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Materiales de primera calidad y acabados profesionales
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Waves className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Probados en Agua</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Testados por pescadores profesionales antes de llegar a ti
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Garantía Total</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Satisfacción 100% garantizada o te devolvemos tu dinero
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Envío Express</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Entrega en 24-48 horas. Envío gratuito en pedidos +50€
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Explora Nuestra Colección</h2>
            <p className="text-lg text-white/80 text-pretty leading-relaxed max-w-2xl mx-auto">
              12 señuelos cuidadosamente seleccionados para diferentes técnicas y especies
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base px-10 h-12">
              <Link href="/productos">Ver Todos los Productos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-slate-600 text-sm md:text-base">Clientes Felices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
              <div className="text-slate-600 text-sm md:text-base">Productos Premium</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-slate-600 text-sm md:text-base">Años Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9</div>
              <div className="text-slate-600 text-sm md:text-base">Valoración Media</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/canarias-lures-logo.png"
                  alt="Canarias Lures"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="font-bold text-lg text-slate-900">Canarias Lures</span>
              </div>
              <p className="text-sm text-slate-600 text-pretty leading-relaxed max-w-md">
                Tu tienda de confianza para señuelos y muestras de pesca profesional. Calidad garantizada desde 2015.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">Navegación</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <Link href="/" className="hover:text-slate-900 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="hover:text-slate-900 transition-colors">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-slate-900 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">Contacto</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>info@canariasLures.com</li>
                <li>+34 123 456 789</li>
                <li>Lun-Vie 9:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
            <p>&copy; 2025 Canarias Lures. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
