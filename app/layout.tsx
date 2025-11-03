import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Canarias Lures - Señuelos de Pesca Premium",
  description: "Las mejores muestras y señuelos de pesca profesional. Colección exclusiva de Canarias Lures.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geist.className} font-sans antialiased`}>
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
