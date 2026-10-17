"use client";

import { useState } from "react";
import { Phone, Menu, X, MapPin, Wrench } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-[#0d1117] text-[#6b7b8f] text-xs py-1.5 border-b border-[#1a2230]">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin size={12} />
            <span className="hidden sm:inline">151, Diamond Harbour Rd, Behala, Kolkata</span>
            <span className="sm:hidden">Behala, Kolkata</span>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a href="tel:+918981572938" className="hidden sm:flex items-center gap-1.5 text-primary/80 hover:text-primary transition-colors font-medium">
              <Phone size={11} />
              <span>089815 72938</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="glass">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary/90 to-primary-dark/90 rounded-xl flex items-center justify-center shadow-lg shadow-primary/10">
              <Wrench className="text-white" size={18} />
            </div>
            <div className="notranslate" translate="no">
              <h1 className="text-base font-black leading-tight text-white/90">PARAS MOBILE</h1>
              <p className="text-[8px] text-primary/60 font-bold tracking-[0.2em]">REPAIR & SERVICE CENTRE</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#8494a7] hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary/50 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+918981572938"
              className="bg-gradient-to-r from-primary/90 to-primary-dark/90 text-white px-5 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone size={13} />
              Call Now
            </a>
          </div>

          <button className="md:hidden p-2 text-[#8494a7]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-card/98 backdrop-blur-xl border-t border-[#1a2230] animate-fade-in shadow-2xl">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-[#8494a7] hover:bg-primary/5 hover:text-primary rounded-xl transition-colors font-medium">
                {link.label}
              </a>
            ))}
            <a href="tel:+918981572938" className="block text-center bg-gradient-to-r from-primary/90 to-primary-dark/90 text-white py-3 rounded-xl font-bold mt-3">
              Call Now - 089815 72938
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
