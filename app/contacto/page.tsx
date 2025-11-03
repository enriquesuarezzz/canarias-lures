"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Fish, Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Contacta con Nosotros</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              ¿Tienes alguna pregunta? Nuestro equipo de expertos está aquí para ayudarte. Responderemos en menos de 24
              horas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre Completo</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono (Opcional)</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+34 123 456 789"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-12 text-lg">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Información de Contacto</h2>
                <p className="text-muted-foreground text-pretty leading-relaxed mb-8">
                  Estamos aquí para ayudarte con cualquier consulta sobre nuestros productos, envíos o asesoramiento
                  técnico.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@muestrasdepesca.com</p>
                    <p className="text-sm text-muted-foreground">Respuesta en 24h</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+34 123 456 789</p>
                    <p className="text-sm text-muted-foreground">Lun-Vie 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-muted-foreground">Calle Pescadores, 123</p>
                    <p className="text-muted-foreground">28001 Madrid, España</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horario</h3>
                    <p className="text-muted-foreground">Lunes - Viernes: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Sábados: 10:00 - 14:00</p>
                    <p className="text-muted-foreground">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border">
                <h3 className="font-semibold text-lg mb-3">¿Necesitas Asesoramiento?</h3>
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed mb-4">
                  Nuestros expertos pueden ayudarte a elegir el señuelo perfecto para tu técnica de pesca y las especies
                  que buscas.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/productos">Ver Catálogo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Fish className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">Muestras de Pesca</span>
              </div>
              <p className="text-sm text-muted-foreground text-pretty leading-relaxed max-w-md">
                Tu tienda de confianza para señuelos y muestras de pesca profesional. Calidad garantizada desde 2015.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Navegación</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="hover:text-primary transition-colors">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-primary transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@muestrasdepesca.com</li>
                <li>+34 123 456 789</li>
                <li>Lun-Vie 9:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Muestras de Pesca. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
