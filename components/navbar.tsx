'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/cart-provider'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openCart, cartItems } = useCart()

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Canarias Lures
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/#productos"
              className="text-foreground hover:text-primary transition-colors"
            >
              Productos
            </Link>
            <Link
              href="/contacto"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
            
            {/* Cart Icon */}
            <button
              onClick={openCart}
              className="relative p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            {/* Cart Icon */}
            <button
              onClick={openCart}
              className="relative p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Hamburger Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10"
              aria-label="Menú"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <>
          {/* Backdrop with blur effect */}
          <div
            className="md:hidden fixed inset-0 top-16 bg-black/60 backdrop-blur-md z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu content */}
          <div className="md:hidden fixed inset-x-0 top-16 bg-background z-50 border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-xl font-medium hover:text-primary transition-colors py-3 px-4 hover:bg-secondary rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="/#productos"
                  className="text-xl font-medium hover:text-primary transition-colors py-3 px-4 hover:bg-secondary rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Productos
                </Link>
                <Link
                  href="/contacto"
                  className="text-xl font-medium hover:text-primary transition-colors py-3 px-4 hover:bg-secondary rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
