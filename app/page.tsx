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
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[url('/water-ripples-texture.jpg')] opacity-[0.02] bg-cover bg-center" />
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.1] tracking-tight">
                Canarias Lures
              </h1>
              <p className="text-xl text-slate-600 text-pretty leading-relaxed max-w-xl">
                Colección exclusiva de señuelos profesionales diseñados por expertos y probados en las mejores aguas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="text-base px-8 h-12">
                  <Link href="/productos">Ver Catálogo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8 h-12 bg-transparent">
                  <Link href="/contacto">Contactar</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[550px]">
              <div className="absolute inset-0 bg-slate-100 rounded-2xl" />
              <Image
                src="/fishing-lures-collection-professional.jpg"
                alt="Colección de señuelos de pesca"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Por Qué Elegirnos</h2>
            <p className="text-lg text-slate-600">Calidad profesional respaldada por más de 10 años de experiencia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto">
                <Fish className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold">Calidad Premium</h3>
              <p className="text-slate-600 text-pretty leading-relaxed">
                Materiales de primera calidad y acabados profesionales
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto">
                <Waves className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold">Probados en Agua</h3>
              <p className="text-slate-600 text-pretty leading-relaxed">
                Testados por pescadores profesionales antes de llegar a ti
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold">Garantía Total</h3>
              <p className="text-slate-600 text-pretty leading-relaxed">
                Satisfacción 100% garantizada o te devolvemos tu dinero
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold">Envío Express</h3>
              <p className="text-slate-600 text-pretty leading-relaxed">
                Entrega en 24-48 horas. Envío gratuito en pedidos +50€
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Explora Nuestra Colección</h2>
            <p className="text-xl text-slate-300 text-pretty leading-relaxed max-w-2xl mx-auto">
              12 señuelos cuidadosamente seleccionados para diferentes técnicas y especies
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base px-10 h-12">
              <Link href="/productos">Ver Todos los Productos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600">Clientes Felices</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900 mb-2">12</div>
              <div className="text-slate-600">Productos Premium</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900 mb-2">10+</div>
              <div className="text-slate-600">Años Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900 mb-2">4.9</div>
              <div className="text-slate-600">Valoración Media</div>
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
                <span className="font-bold text-lg">Canarias Lures</span>
              </div>
              <p className="text-sm text-slate-600 text-pretty leading-relaxed max-w-md">
                Tu tienda de confianza para señuelos y muestras de pesca profesional. Calidad garantizada desde 2015.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Navegación</h3>
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
              <h3 className="font-semibold mb-4">Contacto</h3>
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
