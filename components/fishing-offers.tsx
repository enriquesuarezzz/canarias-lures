export function FishingOffers() {
  return (
    <section className="relative overflow-hidden" style={{ height: "400px" }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/deep-sea-fishing-boat-water.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Anzuelos Premium</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            Descubre nuestra exclusiva colección diseñada para entusiastas de pesca en aguas profundas.
          </p>
          <button className="w-full bg-[#4287f5] hover:bg-[#3168d4] text-white font-bold py-2 px-4 rounded text-sm transition-colors">
            COMPRAR AHORA
          </button>
        </div>
      </div>
    </section>
  )
}
