// src/components/layout/TopNavbar.tsx

import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react'

export default function TopNavbar() {
  return (
    <div className="w-full bg-primary text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Left: Contact Info */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="mailto:info@wincatravel.com"
            className="flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="Email us"
          >
            <Mail size={14} />
            <span className="whitespace-nowrap">
              info@wincatravel.com
            </span>
          </a>

          <a
            href="tel:+254114274647"
            className="flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="Call us"
          >
            <Phone size={14} />
            <span className="whitespace-nowrap">
              +254 743 095 927
            </span>
          </a>
        </div>

        {/* Right: Social Media */}
        <div className="flex items-center gap-4 ml-auto">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={14} />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={14} />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={14} />
          </a>
        </div>

      </div>
    </div>
  )
}