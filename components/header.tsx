"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CartSheet } from "@/components/cart-sheet"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Header() {
  const { totalItems } = useCart()
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/canarias-lures-logo.png" alt="Canarias Lures" width={48} height={48} className="h-12 w-auto" />
          <span className="font-bold text-slate-900 hidden sm:inline">Canarias Lures</span>
        </Link>

        {/* Existing code */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-slate-900",
              pathname === "/" ? "text-slate-900" : "text-slate-600",
            )}
          >
            Inicio
          </Link>
          <Link
            href="/productos"
            className={cn(
              "text-sm font-medium transition-colors hover:text-slate-900",
              pathname === "/productos" ? "text-slate-900" : "text-slate-600",
            )}
          >
            Productos
          </Link>
          <Link
            href="/contacto"
            className={cn(
              "text-sm font-medium transition-colors hover:text-slate-900",
              pathname === "/contacto" ? "text-slate-900" : "text-slate-600",
            )}
          >
            Contacto
          </Link>
        </nav>

        {/* Existing code */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="relative border-slate-200 bg-transparent">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <CartSheet />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
