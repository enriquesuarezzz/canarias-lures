export function WorldwideShipping() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/deep-sea-fishing-boat-water.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div></div>

          {/* Card */}
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Worldwide Shipping</h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              The selection of products will satisfy the needs of all offshore fishermen, from the light tackle brigade
              to the most competitive marlin angler.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Canarias Lures also offers an array of accessories consisting of seat harnesses, lure bags, as well as
              hook and flag sets.
            </p>

            <button className="w-full bg-[#4287f5] hover:bg-[#3168d4] text-white font-bold py-3 px-6 rounded transition-colors">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
