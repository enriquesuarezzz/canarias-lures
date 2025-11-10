export function AnglersTips() {
  const tips = [
    {
      title: "Elige la Profundidad Correcta",
      description:
        "Diferentes especies de peces habitan varias profundidades de agua. Entender las preferencias de profundidad de tu especie objetivo es crucial para la pesca exitosa.",
      icon: "🎣",
    },
    {
      title: "Domina la Velocidad de Trolling",
      description:
        "La velocidad a la que trolleas tus anzuelos puede afectar significativamente tu tasa de captura. Experimenta con diferentes velocidades para encontrar lo que funciona mejor.",
      icon: "⚡",
    },
    {
      title: "La Temperatura del Agua Importa",
      description:
        "Los peces son sangre fría y sus niveles de actividad se ven directamente afectados por la temperatura del agua. Ajusta tus tácticas según los cambios estacionales.",
      icon: "🌊",
    },
    {
      title: "Usa el Tamaño de Anzuelo Correcto",
      description:
        "Haz coincidir el tamaño de tu anzuelo con la especie de presa en el área donde estás pescando. Los anzuelos más grandes atraen peces más grandes, pero pueden reducir la frecuencia de ataques.",
      icon: "🎯",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Esquina del Pescador</h2>
          <p className="text-gray-600 text-lg">Consejos Profesionales para Mejor Pesca</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">{tip.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
