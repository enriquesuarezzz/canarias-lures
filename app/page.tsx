import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ProductCategoryCard } from '@/components/product-category-card'

const categories = [
  {
    name: 'Lures Pequeños',
    slug: 'lures-pequenos',
    image: '/small-fishing-lures-and-soft-plastic-baits-collect.jpg',
  },
  {
    name: 'Lures Medianos',
    slug: 'lures-medianos',
    image: '/medium-size-fishing-lures-crankbaits-and-spinnerba.jpg',
  },
  {
    name: 'Lures Grandes',
    slug: 'lures-grandes',
    image: '/large-fishing-lures-and-swimbait-for-big-fish.jpg',
  },
  {
    name: 'Texas Rig',
    slug: 'texas',
    image: '/texas-rig-fishing-setup-with-weights-and-hooks.jpg',
  },
  {
    name: 'Camisas',
    slug: 'camisas',
    image: '/fishing-shirts-and-performance-apparel.jpg',
  },
  {
    name: 'Anzuelos',
    slug: 'anzuelos',
    image: '/variety-of-fishing-hooks-and-terminal-tackle.jpg',
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Nuestros Productos
            </h2>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Canarias Lures</h3>
              <p className="text-muted-foreground">
                Tu tienda especializada en productos de pesca deportiva
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/" className="hover:text-primary transition-colors">Inicio</a></li>
                <li><a href="/#productos" className="hover:text-primary transition-colors">Productos</a></li>
                <li><a href="/contacto" className="hover:text-primary transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: info@canariaslures.com</li>
                <li>Tel: +34 900 123 456</li>
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
