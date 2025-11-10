"use client"

import Link from "next/link"
import { ArrowLeft, ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Kona Range",
    price: "€42",
    image: "/fishing-lure-kona.jpg",
    description:
      "Premium offshore fishing lure designed for deep-sea trolling. The Kona Range combines high-quality materials with proven fish-catching design, perfect for marlin and other large game fish.",
    specs: ["Length: 6 inches", "Weight: 2.5 oz", "Depth: 20-30 ft", "Color: Multi-color"],
    inStock: true,
  },
  {
    id: 2,
    name: "Flashabou Bullets",
    price: "€30",
    image: "/flashabou-bullets-lure.jpg",
    description:
      "High-visibility fishing lure with reflective flashabou material. Ideal for attracting attention in various water conditions with its distinctive bullet shape and flash pattern.",
    specs: ["Length: 4.5 inches", "Weight: 1.8 oz", "Depth: 15-25 ft", "Color: Silver/Red"],
    inStock: true,
  },
  {
    id: 3,
    name: "Old School Abalones",
    price: "€36",
    image: "/abalone-fishing-lure.jpg",
    description:
      "Classic abalone-shell fishing lure with proven effectiveness. The natural shimmer and color patterns make this lure irresistible to offshore game fish.",
    specs: ["Length: 5 inches", "Weight: 2.2 oz", "Depth: 15-35 ft", "Color: Natural Abalone"],
    inStock: true,
  },
  {
    id: 4,
    name: "Pulsator Lure Kits",
    price: "€115",
    image: "/fishing-lure-kit.jpg",
    description:
      "Complete fishing lure kit with assorted premium lures. Perfect for anglers who want variety and professional-grade equipment for any offshore fishing situation.",
    specs: ["Includes: 8 premium lures", "Carrying case included", "Professional grade", "Complete setup"],
    inStock: true,
  },
  {
    id: 5,
    name: "Replacement Skirts",
    price: "€14",
    image: "/fishing-skirts.jpg",
    description:
      "High-quality replacement skirts for customizing your fishing lures. Available in various colors and patterns to match any fishing condition.",
    specs: ["Material: Premium silicone", "Easy installation", "Various colors", "Pack of 5"],
    inStock: true,
  },
  {
    id: 6,
    name: "Hooks & Hook Rigs",
    price: "€19",
    image: "/fishing-hooks.jpg",
    description:
      "Professional-grade fishing hooks and hook rigs. Precision-engineered for maximum hookup rates and durability in offshore fishing.",
    specs: ["Size: 4/0 - 8/0", "Material: Premium stainless steel", "Sharp edges", "Pack of 10"],
    inStock: true,
  },
  {
    id: 7,
    name: "Dredges & Accessories",
    price: "€80",
    image: "/fishing-dredges.jpg",
    description:
      "Complete dredge system for offshore fishing. Designed to attract game fish with realistic swimming action and flash.",
    specs: ["Depth: 30-50 ft", "Material: High-quality plastic", "Include rigging", "Professional setup"],
    inStock: false,
  },
  {
    id: 8,
    name: "Teasers",
    price: "€27",
    image: "/fishing-teasers.jpg",
    description:
      "Realistic fishing teasers to prepare game fish for the strike. Perfect complement to your main lure setup.",
    specs: ["Length: 3.5 inches", "Weight: 1.2 oz", "Color: Realistic finishes", "Pack of 3"],
    inStock: true,
  },
  {
    id: 9,
    name: "Frigate Birds",
    price: "€30",
    image: "/frigate-bird-lure.jpg",
    description: "Premium frigate bird lure design. Mimics natural bird movements to attract large offshore predators.",
    specs: ["Realistic design", "Durable construction", "Professional finish", "Single unit"],
    inStock: true,
  },
  {
    id: 10,
    name: "Release Flag Kit",
    price: "€42",
    image: "/fishing-flag-kit.jpg",
    description:
      "Professional release flag kit for organized fishing. Features quality materials and easy setup for any fishing vessel.",
    specs: ["Includes flags and hardware", "Professional grade", "Easy installation", "Durable materials"],
    inStock: true,
  },
  {
    id: 11,
    name: "Chuggers",
    price: "€36",
    image: "/chugger-fishing-lure.jpg",
    description:
      "Surface chugger lures that create attention-grabbing action. Perfect for exciting topwater fishing experiences.",
    specs: ["Length: 5.5 inches", "Weight: 2 oz", "Depth: 0-3 ft", "Color: Bright finishes"],
    inStock: true,
  },
  {
    id: 12,
    name: "Game Fish Lures",
    price: "€32",
    image: "/game-fish-lure.jpg",
    description:
      "Specialized lures designed for specific game fish species. Premium construction for maximum effectiveness.",
    specs: ["Length: 4.5 inches", "Weight: 1.9 oz", "Depth: 15-30 ft", "Color: Multi-pattern"],
    inStock: true,
  },
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link href="/products" className="text-[#4287f5] hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/products" className="inline-flex items-center text-[#4287f5] hover:text-[#2563d9] mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-white rounded-lg overflow-hidden shadow">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-auto object-cover max-h-96 md:max-h-full"
            />
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-3xl font-bold text-[#4287f5] mb-4">{product.price}</p>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  In Stock
                </span>
              ) : (
                <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Specifications</h2>
              <ul className="space-y-2">
                {product.specs.map((spec, index) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-[#4287f5] rounded-full mr-3"></span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-[#4287f5] hover:bg-[#2563d9] text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center transition-colors text-lg">
              <ShoppingCart className="w-6 h-6 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
