const products = [
  { id: 1, name: "Premium Lure 1", price: "€49.99" },
  { id: 2, name: "Premium Lure 2", price: "€59.99" },
  { id: 3, name: "Premium Lure 3", price: "€69.99" },
  { id: 4, name: "Premium Lure 4", price: "€79.99" },
  { id: 5, name: "Premium Lure 5", price: "€49.99" },
  { id: 6, name: "Premium Lure 6", price: "€59.99" },
  { id: 7, name: "Premium Lure 7", price: "€69.99" },
  { id: 8, name: "Premium Lure 8", price: "€79.99" },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="bg-gray-300 h-40 flex items-center justify-center overflow-hidden">
                <img
                  src={`/premium-fishing-lure-.jpg?height=160&width=160&query=premium fishing lure ${product.id}`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-[#4287f5] font-bold text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
