"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/canarias-lures-logo.png"
                alt="Canarias Lures Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-2 text-sm">
              <span className="text-gray-600">Contáctanos</span>
              <span className="font-bold text-gray-900">+34 928 123 456</span>
            </div>

            {/* Search & Icons */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center bg-gray-100 rounded px-3 py-2">
                <input
                  type="text"
                  placeholder="Buscar productos"
                  className="bg-transparent outline-none text-sm w-40"
                />
                <Search className="w-4 h-4 text-gray-600" />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded">
                <User className="w-5 h-5" />
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 bg-[#4287f5] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center space-x-8 h-16">
            <Link
              href="/"
              className={`font-bold py-4 transition-colors ${
                isActive("/") ? "text-gray-900 border-b-2 border-[#4287f5] pb-4" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/products"
              className={`font-semibold py-4 transition-colors ${
                isActive("/products")
                  ? "text-gray-900 border-b-2 border-[#4287f5] pb-4"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Productos
            </Link>
            <Link
              href="/contact"
              className={`font-semibold py-4 transition-colors ${
                isActive("/contact")
                  ? "text-gray-900 border-b-2 border-[#4287f5] pb-4"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      {isOpen && (
        <nav className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                isActive("/") ? "bg-[#4287f5] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                isActive("/products") ? "bg-[#4287f5] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Productos
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                isActive("/contact") ? "bg-[#4287f5] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Contacto
            </Link>
          </div>
        </nav>
      )}
    </>
  )
}
