export function VideosSection() {
  const videos = [
    {
      title: "Guía de Pesca en Aguas Profundas",
      description: "Aprende los conceptos básicos de la pesca en aguas profundas con Canarias Lures",
    },
    {
      title: "Cómo Usar Nuestros Cebos",
      description: "Domina la técnica de usar anzuelos de cebo para capturas más grandes",
    },
    {
      title: "Demostración de Anzuelo Canarias",
      description: "Mira nuestros anzuelos característicos en acción",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Videos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.title} className="group cursor-pointer">
              <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4 h-48 flex items-center justify-center">
                <img
                  src="/fishing-video-thumbnail.jpg"
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                  <div className="w-16 h-16 bg-[#3d5a80] rounded-full flex items-center justify-center group-hover:bg-[#2f476a] transition-colors">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-r-0 border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1 border-l-white"></div>
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
