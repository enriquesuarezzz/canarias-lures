"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { type Product, useCart } from "@/components/cart-provider"

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  return (
    <Button size="lg" className="w-full text-lg" onClick={() => addToCart(product)}>
      <ShoppingCart className="mr-2 h-5 w-5" />
      Agregar al Carrito
    </Button>
  )
}
