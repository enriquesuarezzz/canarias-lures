import { Navbar } from "@/components/navbar"

export const metadata = {
  title: "Términos y Condiciones | Canarias Lures",
  description: "Términos y condiciones de venta de Canarias Lures",
}

export default function TerminosCondicionesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Términos y Condiciones</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Información General</h2>
            <p>
              Los presentes términos y condiciones regulan la compra de productos a través del sitio web de Canarias
              Lures. Al realizar un pedido, el usuario acepta expresamente estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Productos y Precios</h2>
            <p>
              Todos los productos están sujetos a disponibilidad. Los precios indicados incluyen IVA y se expresan en
              euros. Canarias Lures se reserva el derecho de modificar los precios en cualquier momento, aunque los
              productos se facturarán al precio indicado en el momento de realizar el pedido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Proceso de Compra</h2>
            <p>Para realizar una compra, el usuario deberá:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Seleccionar los productos deseados</li>
              <li>Añadirlos al carrito de compra</li>
              <li>Completar los datos de facturación y envío</li>
              <li>Seleccionar el método de pago</li>
              <li>Confirmar el pedido</li>
            </ul>
            <p className="mt-4">
              Una vez confirmado el pedido, el usuario recibirá un email de confirmación con los detalles de la compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Métodos de Pago</h2>
            <p>Aceptamos los siguientes métodos de pago:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tarjeta de crédito/débito (Visa, Mastercard)</li>
              <li>PayPal</li>
              <li>Transferencia bancaria</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Envíos y Entregas</h2>
            <p>
              Los plazos de entrega estimados son de 3-7 días laborables para envíos dentro de España peninsular y de
              5-10 días laborables para las Islas Canarias, Baleares, Ceuta y Melilla.
            </p>
            <p className="mt-4">Los gastos de envío varían según el destino y el peso del pedido:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>España peninsular: 5,95€</li>
              <li>Islas Canarias: 9,95€</li>
              <li>Envío gratuito en pedidos superiores a 100€</li>
            </ul>
            <p className="mt-4">
              El cliente recibirá un número de seguimiento para poder rastrear su pedido. Canarias Lures no se hace
              responsable de retrasos ocasionados por la empresa de transporte o causas de fuerza mayor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Derecho de Desistimiento</h2>
            <p>
              El usuario tiene derecho a desistir del contrato en un plazo de 14 días naturales desde la recepción del
              producto, sin necesidad de justificación.
            </p>
            <p className="mt-4">Para ejercer este derecho, deberá notificarlo a través de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: info@canariaslures.com</li>
              <li>Teléfono: +34 900 123 456</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Devoluciones</h2>
            <p>Para realizar una devolución, el producto debe cumplir las siguientes condiciones:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Estar en su embalaje original</li>
              <li>No haber sido usado ni mostrar señales de uso</li>
              <li>Incluir todos los accesorios y documentación</li>
              <li>Estar acompañado del ticket o factura de compra</li>
            </ul>
            <p className="mt-4">
              Los gastos de devolución correrán a cargo del cliente, salvo en caso de productos defectuosos o error en
              el envío.
            </p>
            <p className="mt-4">
              Una vez recibida y verificada la devolución, procederemos al reembolso en un plazo máximo de 14 días
              mediante el mismo método de pago utilizado en la compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Garantías</h2>
            <p>
              Todos nuestros productos están cubiertos por la garantía legal de 2 años según la legislación vigente. En
              caso de producto defectuoso, el cliente puede optar por la reparación, sustitución, rebaja del precio o
              resolución del contrato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modificaciones</h2>
            <p>
              Canarias Lures se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las
              modificaciones entrarán en vigor desde su publicación en el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contacto</h2>
            <p>Para cualquier consulta relacionada con estos términos y condiciones, puede contactarnos en:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Email: info@canariaslures.com</li>
              <li>Teléfono: +34 900 123 456</li>
              <li>Dirección: Lanzarote, Islas Canarias, España</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
