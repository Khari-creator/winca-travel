// src/components/layout/Footer.tsx

import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 pt-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16">

          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Winca Travel & Tours
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Professional visa processing, travel planning, and tour services
              tailored to make your local and international journeys smooth,
              secure, and stress-free.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-red-500 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="hover:text-red-500 transition"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="hover:text-red-500 transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/visas" className="hover:text-red-500 transition">
                  Visa Application Services
                </Link>
              </li>
              <li>
                <Link href="/flights" className="hover:text-red-500 transition">
                  Flight Ticket Booking
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-red-500 transition">
                  Hotel Reservations
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-red-500 transition">
                  Local & International Tours
                </Link>
              </li>
              <li>
                <Link href="/e-citizen" className="hover:text-red-500 transition">
                  E-Citizen Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-red-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/visas" className="hover:text-red-500 transition">
                  Popular Visas
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-red-500 transition">
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-red-500 transition">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500 mt-0.5" />
                <span>
                  Nairobi, Kenya <br />
                  (Hurlingham)
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-500" />
                <a href="tel:+254114274647" className="hover:text-red-500 transition">
                +254 114 274647
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500" />
                <a
                  href="mailto:info@wincatravel.com"
                  className="hover:text-red-500 transition"
                >
                  info@wincatravel.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Winca Travel & Tours. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-red-500 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-red-500 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}