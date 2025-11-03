"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CartSheet } from "@/components/cart-sheet"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const { totalItems } = useCart()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/98 backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <Image
            src="/canarias-lures-logo.png"
            alt="Canarias Lures"
            width={40}
            height={40}
            className="h-10 w-auto md:h-12"
          />
          <span className="hidden sm:inline font-bold text-slate-900 text-sm md:text-base">Canarias Lures</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === "/"
                ? "text-slate-900 border-b-2 border-primary pb-1"
                : "text-slate-600 hover:text-slate-900",
            )}
          >
            Inicio
          </Link>
          <Link
            href="/productos"
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === "/productos"
                ? "text-slate-900 border-b-2 border-primary pb-1"
                : "text-slate-600 hover:text-slate-900",
            )}
          >
            Productos
          </Link>
          <Link
            href="/contacto"
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === "/contacto"
                ? "text-slate-900 border-b-2 border-primary pb-1"
                : "text-slate-600 hover:text-slate-900",
            )}
          >
            Contacto
          </Link>
        </nav>

        {/* Cart and Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative border-slate-300 bg-slate-50 hover:bg-slate-100 h-10 w-10 md:h-11 md:w-11"
              >
                <ShoppingCart className="h-5 w-5 text-slate-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <CartSheet />
            </SheetContent>
          </Sheet>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="border-slate-300 bg-slate-50 hover:bg-slate-100 h-10 w-10 text-slate-700"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] px-0">
              <nav className="flex flex-col gap-2 mt-8 px-4">
                <Link
                  href="/"
                  className={cn(
                    "text-base font-medium px-4 py-3 rounded-lg transition-colors",
                    pathname === "/"
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="/productos"
                  className={cn(
                    "text-base font-medium px-4 py-3 rounded-lg transition-colors",
                    pathname === "/productos"
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Productos
                </Link>
                <Link
                  href="/contacto"
                  className={cn(
                    "text-base font-medium px-4 py-3 rounded-lg transition-colors",
                    pathname === "/contacto"
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
