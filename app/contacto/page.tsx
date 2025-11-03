"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-slate-900">
              Contacta con Nosotros
            </h1>
            <p className="text-base md:text-lg text-slate-600 text-pretty leading-relaxed">
              ¿Tienes alguna pregunta? Nuestro equipo de expertos está aquí para ayudarte. Responderemos en menos de 24
              horas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-slate-700">
                      Nombre Completo
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="h-10 border-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="h-10 border-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-slate-700">
                      Teléfono (Opcional)
                    </Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+34 123 456 789"
                      className="h-10 border-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="text-slate-700">
                      Mensaje
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      required
                      rows={5}
                      className="resize-none border-slate-300"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-10 text-base bg-primary hover:bg-primary/90">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Información de Contacto</h2>
                <p className="text-slate-600 text-pretty leading-relaxed">
                  Estamos aquí para ayudarte con cualquier consulta sobre nuestros productos, envíos o asesoramiento
                  técnico.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600 text-sm">info@canariasLures.com</p>
                    <p className="text-xs text-slate-500">Respuesta en 24h</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Teléfono</h3>
                    <p className="text-slate-600 text-sm">+34 123 456 789</p>
                    <p className="text-xs text-slate-500">Lun-Vie 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Dirección</h3>
                    <p className="text-slate-600 text-sm">Calle Pescadores, 123</p>
                    <p className="text-slate-600 text-sm">28001 Madrid, España</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Horario</h3>
                    <p className="text-slate-600 text-sm">Lunes - Viernes: 9:00 - 18:00</p>
                    <p className="text-slate-600 text-sm">Sábados: 10:00 - 14:00</p>
                    <p className="text-slate-600 text-sm">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">¿Necesitas Asesoramiento?</h3>
                <p className="text-sm text-slate-600 text-pretty leading-relaxed mb-3">
                  Nuestros expertos pueden ayudarte a elegir el señuelo perfecto para tu técnica de pesca y las especies
                  que buscas.
                </p>
                <Button asChild variant="outline" className="w-full bg-white border-slate-300 hover:bg-slate-50">
                  <Link href="/productos">Ver Catálogo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/canarias-lures-logo.png"
                  alt="Canarias Lures"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="font-bold text-lg text-slate-900">Canarias Lures</span>
              </div>
              <p className="text-sm text-slate-600 text-pretty leading-relaxed max-w-md">
                Tu tienda de confianza para señuelos y muestras de pesca profesional. Calidad garantizada desde 2015.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">Navegación</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <Link href="/" className="hover:text-slate-900 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="hover:text-slate-900 transition-colors">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-slate-900 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-900">Contacto</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>info@canariasLures.com</li>
                <li>+34 123 456 789</li>
                <li>Lun-Vie 9:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
            <p>&copy; 2025 Canarias Lures. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
