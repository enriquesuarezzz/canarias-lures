const categories = [
  { name: "Ropa de Pesca", image: "/fishing-clothing-apparel.jpg" },
  { name: "Rango Kona", image: "/fishing-lure-kona.jpg" },
  { name: "Cebos", image: "/fishing-teaser-lure.jpg" },
  { name: "Chuggers", image: "/fishing-chugger-lure.jpg" },
  { name: "Balas Flashabou", image: "/flashabou-bullet-lure.jpg" },
  { name: "Dredges y Accesorios", image: "/fishing-dredge-accessory.jpg" },
  { name: "Kits de Anzuelos", image: "/fishing-lure-kit-set.jpg" },
  { name: "Anzuelos para Peces", image: "/game-fish-lure.jpg" },
  { name: "Pájaros Fragata", image: "/frigate-bird-fishing-lure.jpg" },
  { name: "Faldas de Caballa", image: "/mackerel-skirt-busters.jpg" },
]

export function ProductCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Compra por Categoría</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center justify-center hover:shadow-lg rounded-lg transition-shadow cursor-pointer group overflow-hidden"
            >
              <div className="w-full h-40 bg-gray-200 overflow-hidden rounded-lg mb-4">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="text-center text-sm font-semibold text-gray-900 text-pretty">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
