import { Navbar } from "@/components/navbar"

export const metadata = {
  title: "Política de Privacidad | Canarias Lures",
  description: "Política de privacidad de Canarias Lures",
}

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Privacidad</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Responsable del Tratamiento</h2>
            <p>
              Canarias Lures es el responsable del tratamiento de los datos personales del Usuario y le informa que
              estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril
              (GDPR) y la Ley Orgánica 3/2018 de 5 de diciembre (LOPDGDD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Finalidad del Tratamiento de Datos</h2>
            <p>Los datos personales que se recogen a través del sitio web serán utilizados para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestionar las solicitudes de información y contacto</li>
              <li>Procesar pedidos y gestionar envíos</li>
              <li>Enviar comunicaciones comerciales si el usuario ha dado su consentimiento</li>
              <li>Cumplir con las obligaciones legales aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Base Legal para el Tratamiento</h2>
            <p>La base legal para el tratamiento de sus datos es:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El consentimiento del interesado</li>
              <li>La ejecución de un contrato en el que el interesado es parte</li>
              <li>El cumplimiento de obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Conservación de Datos</h2>
            <p>
              Los datos personales se conservarán mientras se mantenga la relación comercial o durante los años
              necesarios para cumplir con las obligaciones legales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Derechos del Usuario</h2>
            <p>El usuario tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la rectificación de datos inexactos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Solicitar la limitación del tratamiento de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
            <p className="mt-4">Para ejercer estos derechos, puede contactar con nosotros en: info@canariaslures.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Seguridad de los Datos</h2>
            <p>
              Canarias Lures adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de los
              datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
