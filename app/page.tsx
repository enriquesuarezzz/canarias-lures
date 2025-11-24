import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProductCategoryCard } from "@/components/product-category-card"
import { Facebook, Instagram } from "lucide-react"

const categories = [
  {
    name: "Lures Pequeños",
    slug: "lures-pequenos",
    image: "/images/lures_pequenos.jpg",
  },
  {
    name: "Lures Medianos",
    slug: "lures-medianos",
    image: "/images/lures_medianos.jpg",
  },
  {
    name: "Lures Grandes",
    slug: "lures-grandes",
    image: "/images/lures_grandes.jpg",
  },
  {
    name: "Texas Rig",
    slug: "texas",
    image: "/images/lures_grandes.jpg",
  },
  {
    name: "Camisas",
    slug: "camisas",
    image: "/images/camisas.jpg",
  },
  {
    name: "Anzuelos",
    slug: "anzuelos",
    image: "/fishing-hooks.jpg",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <section id="productos" className="py-20 px-4 lg:px-8 scroll-mt-16">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestros Productos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Explora nuestra selección especializada de señuelos y equipos de pesca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category) => (
              <ProductCategoryCard
                key={category.slug}
                name={category.name}
                image={category.image}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Canarias Lures</h3>
              <p className="text-muted-foreground">Tu tienda especializada en productos de pesca deportiva</p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.facebook.com/p/Canarias-lures-100054236180517/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/canariaslures/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/#productos" className="hover:text-primary transition-colors">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="hover:text-primary transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="/aviso-legal" className="hover:text-primary transition-colors">
                    Aviso Legal
                  </a>
                </li>
                <li>
                  <a href="/politica-privacidad" className="hover:text-primary transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="/politica-cookies" className="hover:text-primary transition-colors">
                    Política de Cookies
                  </a>
                </li>
                <li>
                  <a href="/terminos-condiciones" className="hover:text-primary transition-colors">
                    Términos y Condiciones
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="mailto:info@canariaslures.com" className="hover:text-primary transition-colors">
                    info@canariaslures.com
                  </a>
                </li>
                <li>
                  <a href="tel:+34900123456" className="hover:text-primary transition-colors">
                    +34 900 123 456
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 Canarias Lures. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
