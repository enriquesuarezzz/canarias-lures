'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/cart-provider'
import { Check } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  sizes?: string[]
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0])
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedSize || 'default'}`,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-balance">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">Tamaño:</label>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <Button
            onClick={handleAddToCart}
            className="transition-all duration-300"
            disabled={added}
          >
            {added ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Añadido
              </>
            ) : (
              'Añadir al Carrito'
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
