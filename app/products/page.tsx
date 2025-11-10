"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const products = [
  { id: 1, name: "Kona Range", category: "Kona Range", price: "€42", image: "/fishing-lure-kona.jpg" },
  {
    id: 2,
    name: "Flashabou Bullets",
    category: "Flashabou Bullets",
    price: "€30",
    image: "/flashabou-bullets-lure.jpg",
  },
  {
    id: 3,
    name: "Old School Abalones",
    category: "Old School Abalones",
    price: "€36",
    image: "/abalone-fishing-lure.jpg",
  },
  {
    id: 4,
    name: "Pulsator Lure Kits",
    category: "Pulsator Lure Kits",
    price: "€115",
    image: "/fishing-lure-kit.jpg",
  },
  {
    id: 5,
    name: "Replacement Skirts",
    category: "Replacement Skirts",
    price: "€14",
    image: "/fishing-skirts.jpg",
  },
  {
    id: 6,
    name: "Hooks & Hook Rigs",
    category: "Hooks & Hook Rigs",
    price: "€19",
    image: "/fishing-hooks.jpg",
  },
  { id: 7, name: "Dredges & Accessories", category: "Dredges", price: "€80", image: "/fishing-dredges.jpg" },
  { id: 8, name: "Teasers", category: "Teasers", price: "€27", image: "/fishing-teasers.jpg" },
  { id: 9, name: "Frigate Birds", category: "Frigate Birds", price: "€30", image: "/frigate-bird-lure.jpg" },
  { id: 10, name: "Release Flag Kit", category: "Flag Kit", price: "€42", image: "/fishing-flag-kit.jpg" },
  { id: 11, name: "Chuggers", category: "Chuggers", price: "€36", image: "/chugger-fishing-lure.jpg" },
  { id: 12, name: "Game Fish Lures", category: "Game Fish", price: "€32", image: "/game-fish-lure.jpg" },
]

const categories = [
  "Kona Range",
  "Flashabou Bullets",
  "Old School Abalones",
  "Replacement Skirts",
  "Hooks & Hook Rigs",
  "Dredges & Accessories",
  "Teasers",
  "Frigate Birds",
  "Release Flag Kit",
  "Chuggers",
  "Game Fish Lures",
]

const priceRanges = [
  { min: 0, max: 50, label: "€0 - €50" },
  { min: 50, max: 100, label: "€50 - €100" },
  { min: 100, max: 200, label: "€100 - €200" },
  { min: 200, max: Number.POSITIVE_INFINITY, label: "€200+" },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedPrice, setSelectedPrice] = useState<{ min: number; max: number } | null>(null)
  const [showCategoryFilter, setShowCategoryFilter] = useState(false)
  const [showPriceFilter, setShowPriceFilter] = useState(false)

  const filteredProducts = products.filter((product) => {
    const categoryMatch = !selectedCategory || product.category === selectedCategory
    const priceMatch = !selectedPrice || (product.price.replace(/[^\d]/g, "") as any) >= selectedPrice.min
    return categoryMatch && priceMatch
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tienda</h1>
          <p className="text-gray-600">Anzuelos de pesca premium y accesorios</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-[#4287f5] rounded p-4 mb-8">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Pedidos antes de las 12pm</span> se envían el mismo día.{" "}
            <span className="font-semibold">2-4 días laborales</span> de entrega dentro de la UE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="hidden md:block md:col-span-1">
            <div className="sticky top-20">
              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Precio</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedPrice?.min === range.min && selectedPrice?.max === range.max}
                        onChange={(e) => setSelectedPrice(e.target.checked ? range : null)}
                        className="w-4 h-4 rounded border-gray-300 text-[#4287f5] focus:ring-[#4287f5]"
                      />
                      <span className="ml-3 text-sm text-gray-700 group-hover:text-[#4287f5] transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Categories Filter */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Categorías</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-all ${
                        selectedCategory === category
                          ? "bg-[#4287f5] text-white font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="md:hidden mb-6 space-y-3">
              <button
                onClick={() => setShowCategoryFilter(!showCategoryFilter)}
                className="w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded transition-colors"
              >
                <span className="font-semibold text-gray-900">Categorías</span>
                <ChevronDown size={20} className={`transition-transform ${showCategoryFilter ? "rotate-180" : ""}`} />
              </button>
              {showCategoryFilter && (
                <div className="bg-gray-50 border border-gray-200 rounded p-4 space-y-2 max-h-64 overflow-y-auto">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(selectedCategory === category ? null : category)}
                        className="w-4 h-4 rounded text-[#4287f5]"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              )}

              <button
                onClick={() => setShowPriceFilter(!showPriceFilter)}
                className="w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded transition-colors"
              >
                <span className="font-semibold text-gray-900">Precio</span>
                <ChevronDown size={20} className={`transition-transform ${showPriceFilter ? "rotate-180" : ""}`} />
              </button>
              {showPriceFilter && (
                <div className="bg-gray-50 border border-gray-200 rounded p-4 space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedPrice?.min === range.min && selectedPrice?.max === range.max}
                        onChange={(e) => setSelectedPrice(e.target.checked ? range : null)}
                        className="w-4 h-4 rounded text-[#4287f5]"
                      />
                      <span className="ml-2 text-sm text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group h-full flex flex-col">
                    <div className="aspect-square overflow-hidden bg-gray-100 relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 sm:p-4 flex flex-col flex-grow">
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 line-clamp-2 flex-grow">
                        {product.name}
                      </h3>
                      <p className="text-sm sm:text-base font-bold text-[#4287f5] mb-3">{product.price}</p>
                      <button className="w-full bg-[#4287f5] hover:bg-[#3168d4] text-white font-semibold py-2 rounded text-xs sm:text-sm transition-colors">
                        Ver
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
