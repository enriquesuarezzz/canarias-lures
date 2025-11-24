import { Navbar } from "@/components/navbar"

export const metadata = {
  title: "Aviso Legal | Canarias Lures",
  description: "Aviso legal de Canarias Lures",
}

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Aviso Legal</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datos Identificativos</h2>
            <p>
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de
              Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los
              siguientes datos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Denominación social: Canarias Lures</li>
              <li>Domicilio social: Lanzarote, Islas Canarias, España</li>
              <li>Email: info@canariaslures.com</li>
              <li>Teléfono: +34 900 123 456</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Objeto</h2>
            <p>
              El presente aviso legal regula el uso y utilización del sitio web www.canariaslures.com, del que es
              titular Canarias Lures.
            </p>
            <p>
              La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y
              sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Propiedad Intelectual e Industrial</h2>
            <p>
              El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y
              demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos son
              propiedad de Canarias Lures o en su caso dispone de licencia o autorización expresa por parte de los
              autores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Responsabilidad</h2>
            <p>
              Canarias Lures no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza
              que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de
              disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a
              pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Legislación Aplicable</h2>
            <p>
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las
              actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten
              expresamente las partes.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
