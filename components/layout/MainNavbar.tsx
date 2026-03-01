// src/components/layout/MainNavbar.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

function MainNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [destOpen, setDestOpen] = useState(false)
  const [toursOpen, setToursOpen] = useState(false)
  const [visaOpen, setVisaOpen] = useState(false)

  const closeAll = () => {
    setDestOpen(false)
    setToursOpen(false)
    setVisaOpen(false)
  }

  const closeMobileMenu = () => {
    setMobileOpen(false)
    closeAll()
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="WINCA Tours & Travel"
            width={330}
            height={200}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-primary">

          <Link href="/" className="hover:text-secondary">Home</Link>

          {/* Destinations */}
          <div className="relative">
            <button
              onClick={() => {
                closeAll()
                setDestOpen(!destOpen)
              }}
              className="flex items-center gap-1 hover:text-secondary"
            >
              Destinations <ChevronDown size={14} />
            </button>

            {destOpen && (
              <div className="absolute top-full left-0 mt-3 w-60 bg-white border shadow-xl rounded-md">
                {[
                  ['Kenya', '/destinations/kenya'],
                  ['Thailand', '/destinations/thailand'],
                  ['Singapore', '/destinations/singapore'],
                  ['Dubai', '/destinations/dubai'],
                  ['Europe', '/destinations/europe'],
                  ['USA', '/destinations/usa'],
                  ['Maldives', '/destinations/maldives'],
                  ['South Africa', '/destinations/south-africa'],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 hover:bg-gray-50"
                    onClick={closeAll}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/destinations"
                  className="block px-4 py-2 font-semibold hover:bg-gray-50"
                  onClick={closeAll}
                >
                  View All Destinations
                </Link>
              </div>
            )}
          </div>

          {/* Tours */}
          <div className="relative">
            <button
              onClick={() => {
                closeAll()
                setToursOpen(!toursOpen)
              }}
              className="flex items-center gap-1 hover:text-secondary"
            >
              Tours <ChevronDown size={14} />
            </button>

            {toursOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-white border shadow-xl rounded-md">
                {[
                  ['International Tours', '/tours/international'],
                  ['Local Tours', '/tours/local'],
                  ['Honeymoon Packages', '/tours/honeymoon'],
                  ['Group Tours', '/tours/group'],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 hover:bg-gray-50"
                    onClick={closeAll}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Visa Services */}
          <div className="relative">
            <button
              onClick={() => {
                closeAll()
                setVisaOpen(!visaOpen)
              }}
              className="flex items-center gap-1 hover:text-secondary"
            >
              Visa Services <ChevronDown size={14} />
            </button>

            {visaOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-white border shadow-xl rounded-md">
                {[
                  ['UK Visa', '/visas/uk'],
                  ['Schengen Visa', '/visas/schengen'],
                  ['USA Visa', '/visas/usa'],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 hover:bg-gray-50"
                    onClick={closeAll}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/visas"
                  className="block px-4 py-2 font-semibold hover:bg-gray-50"
                  onClick={closeAll}
                >
                  View All Visas
                </Link>
              </div>
            )}
          </div>

          <Link href="/flights" className="hover:text-secondary">Flights</Link>
          <Link href="/hotels" className="hover:text-secondary">Hotels</Link>
          <Link href="/e-citizen" className="hover:text-secondary">E-Citizen</Link>
          <Link href="/about" className="hover:text-secondary">About</Link>
          <Link href="/contact" className="hover:text-secondary">Contact</Link>
        </nav>

        {/* CTA + MOBILE */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden lg:inline-flex bg-secondary text-white px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90"
          >
            Plan My Trip
          </Link>

          <button
            onClick={() => {
              if (mobileOpen) {
                closeMobileMenu()
                return
              }
              closeAll()
              setMobileOpen(true)
            }}
            className="lg:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="px-4 py-4 flex flex-col gap-1 text-sm font-medium text-primary">
            <Link href="/" className="px-2 py-2 rounded hover:bg-gray-50" onClick={closeMobileMenu}>Home</Link>

            <button
              onClick={() => {
                setDestOpen(!destOpen)
                setToursOpen(false)
                setVisaOpen(false)
              }}
              className="px-2 py-2 rounded hover:bg-gray-50 flex items-center justify-between"
            >
              Destinations <ChevronDown size={14} className={destOpen ? 'rotate-180 transition' : 'transition'} />
            </button>
            {destOpen && (
              <div className="ml-3 mb-1 border-l pl-3 flex flex-col">
                <Link href="/destinations" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>View All Destinations</Link>
                <Link href="/destinations/kenya" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>Kenya</Link>
                <Link href="/destinations/thailand" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>Thailand</Link>
                <Link href="/destinations/singapore" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>Singapore</Link>
                <Link href="/destinations/dubai" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>Dubai</Link>
              </div>
            )}

            <button
              onClick={() => {
                setToursOpen(!toursOpen)
                setDestOpen(false)
                setVisaOpen(false)
              }}
              className="px-2 py-2 rounded hover:bg-gray-50 flex items-center justify-between"
            >
              Tours <ChevronDown size={14} className={toursOpen ? 'rotate-180 transition' : 'transition'} />
            </button>
            {toursOpen && (
              <div className="ml-3 mb-1 border-l pl-3 flex flex-col">
                <Link href="/tours/international" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>International Tours</Link>
                <Link href="/tours/local" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>Local Tours</Link>
                <Link href="/tours/honeymoon" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>Honeymoon Packages</Link>
                <Link href="/tours/group" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>Group Tours</Link>
              </div>
            )}

            <button
              onClick={() => {
                setVisaOpen(!visaOpen)
                setDestOpen(false)
                setToursOpen(false)
              }}
              className="px-2 py-2 rounded hover:bg-gray-50 flex items-center justify-between"
            >
              Visa Services <ChevronDown size={14} className={visaOpen ? 'rotate-180 transition' : 'transition'} />
            </button>
            {visaOpen && (
              <div className="ml-3 mb-1 border-l pl-3 flex flex-col">
                <Link href="/visas" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>View All Visas</Link>
                <Link href="/visas/uk" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>UK Visa</Link>
                <Link href="/visas/schengen" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>Schengen Visa</Link>
                <Link href="/visas/usa" className="py-2 text-gray-700 hover:text-secondary" onClick={closeMobileMenu}>USA Visa</Link>
              </div>
            )}

            <Link href="/flights" className="px-2 py-2 rounded hover:bg-gray-50" onClick={closeMobileMenu}>Flights</Link>
            <Link href="/hotels" className="px-2 py-2 rounded hover:bg-gray-50" onClick={closeMobileMenu}>Hotels</Link>
            <Link href="/e-citizen" className="px-2 py-2 rounded hover:bg-gray-50" onClick={closeMobileMenu}>E-Citizen</Link>
            <Link href="/about" className="px-2 py-2 rounded hover:bg-gray-50" onClick={closeMobileMenu}>About</Link>
            <Link href="/contact" className="px-2 py-2 rounded hover:bg-gray-50" onClick={closeMobileMenu}>Contact</Link>

            <Link
              href="/contact"
              className="mt-3 inline-flex items-center justify-center bg-secondary text-white px-4 py-3 rounded-md font-semibold hover:opacity-90"
              onClick={closeMobileMenu}
            >
              Plan My Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export { MainNavbar }
export default MainNavbar