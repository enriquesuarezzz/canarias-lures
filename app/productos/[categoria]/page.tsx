import { Navbar } from '@/components/navbar'
import { ProductCard } from '@/components/product-card'
import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  sizes?: string[]
}

const productsData: Record<string, { title: string; products: Product[] }> = {
  'lures-pequenos': {
    title: 'Lures Pequeños',
    products: [
      {
        id: 'lp-1',
        name: 'Soft Plastic Worm 3"',
        price: 5.99,
        image: '/small-soft-plastic-fishing-worm.jpg',
        description: 'Señuelo suave de 3 pulgadas, perfecto para bass y lubinas',
        sizes: ['3"', '4"'],
      },
      {
        id: 'lp-2',
        name: 'Mini Crankbait',
        price: 8.99,
        image: '/small-crankbait-fishing-lure.jpg',
        description: 'Crankbait compacto con acción vibrante',
        sizes: ['2"', '3"'],
      },
      {
        id: 'lp-3',
        name: 'Micro Jig',
        price: 4.99,
        image: '/micro-jig-head-fishing-lure.jpg',
        description: 'Jig ultraligero para finesse fishing',
      },
    ],
  },
  'lures-medianos': {
    title: 'Lures Medianos',
    products: [
      {
        id: 'lm-1',
        name: 'Spinnerbait 1/2 oz',
        price: 12.99,
        image: '/medium-spinnerbait-fishing-lure.jpg',
        description: 'Spinnerbait versátil con blades Colorado y Willow',
      },
      {
        id: 'lm-2',
        name: 'Jerkbait Suspending',
        price: 14.99,
        image: '/suspending-jerkbait-fishing-lure.jpg',
        description: 'Jerkbait de suspensión para aguas frías',
      },
      {
        id: 'lm-3',
        name: 'Chatterbait',
        price: 13.99,
        image: '/chatterbait-bladed-jig.jpg',
        description: 'Bladed jig con vibración intensa',
      },
    ],
  },
  'lures-grandes': {
    title: 'Lures Grandes',
    products: [
      {
        id: 'lg-1',
        name: 'Swimbait 8"',
        price: 24.99,
        image: '/large-swimbait-fishing-lure.jpg',
        description: 'Swimbait realista de 8 pulgadas para grandes depredadores',
      },
      {
        id: 'lg-2',
        name: 'Topwater Popper XL',
        price: 19.99,
        image: '/large-topwater-popper-lure.jpg',
        description: 'Popper de superficie para pesca explosiva',
      },
      {
        id: 'lg-3',
        name: 'Giant Crankbait',
        price: 22.99,
        image: '/placeholder.svg?height=400&width=400',
        description: 'Crankbait de inmersión profunda',
      },
    ],
  },
  texas: {
    title: 'Texas Rig',
    products: [
      {
        id: 'tx-1',
        name: 'Kit Texas Completo',
        price: 15.99,
        image: '/placeholder.svg?height=400&width=400',
        description: 'Kit completo con plomadas, anzuelos y cuentas',
      },
      {
        id: 'tx-2',
        name: 'Bullet Weights Set',
        price: 8.99,
        image: '/placeholder.svg?height=400&width=400',
        description: 'Set de plomadas tipo bala de diversos pesos',
      },
      {
        id: 'tx-3',
        name: 'EWG Hooks Pack',
        price: 6.99,
        image: '/placeholder.svg?height=400&width=400',
        description: 'Pack de anzuelos extra wide gap',
      },
    ],
  },
  camisas: {
    title: 'Camisas',
    products: [
      {
        id: 'cm-1',
        name: 'Camisa Performance UV',
        price: 39.99,
        image: '/placeholder.svg?height=400&width=400',
        description: 'Camisa de pesca con protección UV50+',
        sizes: ['S', 'M', 'L', 'XL'],
      },
      {
        id: 'cm-2',
        name: 'Polo Técnico',
        price: 34.99,
        image: '/placeholder.svg?height=400&width=400',
        description: 'Polo técnico transpirable',
        sizes: ['S', 'M', 'L', 'XL'],
      },
      {
        id: 'cm-3',
        name: 'Camisa Manga Larga',
        price: 44.99,
        image: '/placeholder.svg?height=400&width=400',
        description: 'Camisa manga larga con ventilación',
        sizes: ['S', 'M', 'L', 'XL'],
      },
    ],
  },
  anzuelos: {
    title: 'Anzuelos',
    products: [
      {
        id: 'an-1',
        name: 'Anzuelos Octopus',
        price: 4.99,
        image: '/placeholder.svg?height=400&width=400',
        description: 'Pack de 20 anzuelos tipo octopus',
      },
      {
        id: 'an-2',
        name: 'Anzuelos Treble',
        price: 5.99,
        image: '/placeholder.svg?height=400&width=400',
        description: 'Anzuelos triples de alta resistencia',
      },
      {
        id: 'an-3',
        name: 'Circle Hooks',
        price: 6.99,
        image: '/placeholder.svg?height=400&width=400',
        description: 'Anzuelos circulares para captura y suelta',
      },
    ],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>
}): Promise<Metadata> {
  const { categoria } = await params
  const categoryData = productsData[categoria]
  
  return {
    title: `${categoryData?.title || 'Productos'} - FishPro`,
    description: `Explora nuestra selección de ${categoryData?.title || 'productos'} de pesca`,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>
}) {
  const { categoria } = await params
  const categoryData = productsData[categoria]

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Categoría no encontrada</h1>
          <Link href="/" className="text-primary hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 px-4 lg:px-8">
        <div className="container mx-auto">
          <Link
            href="/#productos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft className="w-5 h-5" />
            Volver a Productos
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {categoryData.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Descubre nuestra selección especializada de {categoryData.title.toLowerCase()}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categoryData.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(productsData).map((categoria) => ({
    categoria,
  }))
}
