"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Guilarte & Servicios"
              className="w-20 h-20 rounded-full shadow-lg object-cover"
            />
            <div className="text-left leading-tight">
              <div className="text-xs md:text-sm font-semibold text-orange-600 uppercase tracking-wide">
                Guilarte & Servicios
              </div>
              <div className="text-base md:text-lg font-bold text-gray-900">
                Reformas · Limpieza
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/reformas"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Reformas
            </Link>
            <Link
              href="/servicios-limpieza-alicante"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Limpieza
            </Link>
            <Link
              href="#servicios"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#proyectos"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#nosotros"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="#contacto"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Contacto
            </Link>
            <a
              href="https://wa.me/34674302128"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Llamar Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/reformas"
                className="text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Reformas
              </Link>
              <Link
                href="/servicios-limpieza-alicante"
                className="text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Limpieza
              </Link>
              <Link
                href="#servicios"
                className="text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#proyectos"
                className="text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="#nosotros"
                className="text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#contacto"
                className="text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <a
                href="https://wa.me/34674302128"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold text-center transition-colors"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
