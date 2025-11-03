import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/products"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-slate-900">Nuestro Catálogo</h1>
            <p className="text-base md:text-lg text-slate-600 text-pretty leading-relaxed">
              Selección completa de señuelos profesionales para diferentes técnicas y especies
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              Todos
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-balance text-slate-900">¿Necesitas Ayuda?</h2>
            <p className="text-base md:text-lg text-slate-600 text-pretty leading-relaxed">
              Nuestro equipo está aquí para ayudarte a encontrar el señuelo perfecto
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/canarias-lures-logo.png" alt="Canarias Lures" className="h-8 w-auto" />
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
