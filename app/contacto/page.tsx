import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - Canarias Lures',
  description: 'Contáctanos para cualquier consulta sobre nuestros productos de pesca',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-center">
            Contáctanos
          </h1>
          <p className="text-lg text-muted-foreground mb-12 text-center text-balance">
            ¿Tienes preguntas? Estamos aquí para ayudarte
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@canariaslures.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+34 900 123 456</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lun - Vie: 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">
                      Calle Puerto del Carmen 45
                      <br />
                      35510 Lanzarote, Canarias
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
