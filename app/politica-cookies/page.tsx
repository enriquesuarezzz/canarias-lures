import { Navbar } from "@/components/navbar"

export const metadata = {
  title: "Política de Cookies | Canarias Lures",
  description: "Política de cookies de Canarias Lures",
}

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Cookies</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. ¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio
              web. Estos archivos permiten que el sitio web recuerde sus acciones y preferencias durante un período de
              tiempo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Tipos de Cookies que Utilizamos</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Cookies Técnicas (Necesarias)</h3>
            <p>
              Estas cookies son esenciales para el funcionamiento del sitio web y no pueden ser desactivadas. Permiten
              la navegación y el uso de las diferentes opciones del sitio.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Cookies de Análisis</h3>
            <p>
              Estas cookies nos permiten analizar el uso del sitio web para medir y mejorar el rendimiento. Toda la
              información que recogen estas cookies es agregada y anónima.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Cookies de Personalización</h3>
            <p>
              Permiten recordar información para que el usuario acceda al servicio con características que pueden
              diferenciar su experiencia de la de otros usuarios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Gestión de Cookies</h2>
            <p>
              Puede configurar su navegador para aceptar o rechazar las cookies. La mayoría de los navegadores aceptan
              cookies automáticamente, pero puede modificar la configuración de su navegador para rechazarlas si lo
              prefiere.
            </p>
            <p className="mt-4">
              Para más información sobre cómo gestionar las cookies en los navegadores más comunes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                Chrome: Configuración {">"} Privacidad y seguridad {">"} Cookies
              </li>
              <li>
                Firefox: Opciones {">"} Privacidad y seguridad {">"} Cookies
              </li>
              <li>
                Safari: Preferencias {">"} Privacidad {">"} Cookies
              </li>
              <li>
                Edge: Configuración {">"} Privacidad, búsqueda y servicios {">"} Cookies
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Actualización de la Política de Cookies</h2>
            <p>
              Canarias Lures puede modificar esta Política de Cookies en función de exigencias legislativas,
              reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia
              Española de Protección de Datos.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
