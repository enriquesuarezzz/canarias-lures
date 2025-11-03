"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/components/cart-provider"
import { useCart } from "@/components/cart-provider"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <Card className="group overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 bg-white">
      <Link href={`/producto/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-slate-100">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <CardContent className="p-5">
        <Link href={`/producto/${product.id}`}>
          <h3 className="font-semibold text-lg text-balance group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-slate-500 mt-1">{product.category}</p>
        <p className="text-2xl font-bold text-blue-600 mt-3">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button className="w-full" onClick={() => addToCart(product)}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
