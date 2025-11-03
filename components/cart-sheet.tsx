"use client"

import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { SheetHeader, SheetTitle } from "@/components/ui/sheet"

export function CartSheet() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <SheetHeader>
          <SheetTitle>Tu Carrito</SheetTitle>
        </SheetHeader>
        <p className="text-muted-foreground text-center">Tu carrito está vacío</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <SheetHeader className="mb-6">
        <SheetTitle>Tu Carrito</SheetTitle>
      </SheetHeader>

      <div className="flex-1 overflow-y-auto space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4 border-b border-border pb-4">
            <div className="relative h-20 w-20 rounded-md overflow-hidden bg-muted">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex-1 space-y-2">
              <h4 className="font-medium text-sm text-balance">{item.name}</h4>
              <p className="text-sm font-bold text-primary">${item.price.toFixed(2)}</p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7 bg-transparent"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7 bg-transparent"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 ml-auto text-destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-4 space-y-4">
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total:</span>
          <span className="text-primary">${totalPrice.toFixed(2)}</span>
        </div>
        <Button className="w-full" size="lg">
          Proceder al Pago
        </Button>
        <Button variant="outline" className="w-full bg-transparent" onClick={clearCart}>
          Vaciar Carrito
        </Button>
      </div>
    </div>
  )
}
