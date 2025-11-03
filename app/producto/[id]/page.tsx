import { Header } from "@/components/header"
import { products } from "@/lib/products"
import { notFound } from "next/navigation"
import Image from "next/image"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a la tienda
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-semibold mb-3">Descripción</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">{product.description}</p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-semibold mb-3">Características</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Material de alta calidad</li>
                <li>✓ Colores duraderos y resistentes</li>
                <li>✓ Acción realista en el agua</li>
                <li>✓ Anzuelos ultra afilados</li>
                <li>✓ Probado por profesionales</li>
              </ul>
            </div>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}
