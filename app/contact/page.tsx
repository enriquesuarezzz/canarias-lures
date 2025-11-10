import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contáctanos</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ponte en Contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#4287f5] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600 mt-1">+34 928 123 456</p>
                    <p className="text-sm text-gray-500">Disponible Lunes - Viernes, 9am - 6pm WET</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#4287f5] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Correo Electrónico</h3>
                    <p className="text-gray-600 mt-1">info@canarioslures.com</p>
                    <p className="text-sm text-gray-500">Responderemos dentro de 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#4287f5] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600 mt-1">Avenida Marítima 123</p>
                    <p className="text-gray-600">Las Palmas, Islas Canarias 35000</p>
                    <p className="text-gray-600">España</p>
                    <p className="text-sm text-gray-500 mt-2">Envío europeo y mundial disponible</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#4287f5] text-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Información de Envío</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Los pedidos realizados antes de las 12pm se envían el mismo día</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Entrega en 2-4 días laborales dentro de la UE</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Envío gratis en pedidos superiores a €100</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4287f5] focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Dirección de Correo
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4287f5] focus:border-transparent"
                  placeholder="tu@correo.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Número de Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4287f5] focus:border-transparent"
                  placeholder="+34 ..."
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4287f5] focus:border-transparent"
                  placeholder="¿Cómo podemos ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4287f5] focus:border-transparent resize-none"
                  placeholder="Cuéntanos más sobre tu consulta..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4287f5] hover:bg-[#2563d9] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
