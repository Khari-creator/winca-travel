// src/app/layout.tsx

import type { Metadata } from "next"
import "./globals.css"

import TopNavbar from "../../components/layout/TopNavbar"
import MainNavbar from "../../components/layout/MainNavbar"
import Footer from "../../components/layout/Footer"

export const metadata: Metadata = {
  title: {
    default: "Winca Travel & Visa Services",
    template: "%s | Winca Travel",
  },
  description:
    "Professional visa application, travel booking, tours, and e-citizen services. We make your travel journey smooth and stress-free.",
  keywords: [
    "Visa services",
    "Travel agency",
    "Flight booking",
    "Hotel reservation",
    "Tours",
    "E-citizen services",
  ],
  authors: [{ name: "Winca Travel" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased text-primary bg-white">

        {/* Top Utility Bar */}
        <TopNavbar />

        {/* Main Navigation (Sticky handled internally) */}
        <MainNavbar />

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}