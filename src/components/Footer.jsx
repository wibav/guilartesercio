"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative w-20 h-20 rounded-full shadow-md bg-white overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Guilarte & Servicios"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-400">
                  Guilarte & Servicios
                </h3>
                <p className="text-sm text-gray-300">
                  Reformas · Limpieza · Mantenimiento
                </p>
              </div>
            </div>
            <p className="text-gray-400">
              Construcción y servicios profesionales en Alicante. Transformamos
              tu hogar con calidad y confianza.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicios"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>Alicante, España</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <a
                  href="mailto:Gruberhawk@gmail.com"
                  className="hover:text-orange-400"
                >
                  Gruberhawk@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <a href="tel:+34674302128" className="hover:text-yellow-500">
                  +34 674 30 21 28
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>💬</span>
                <a
                  href="https://wa.me/34674302128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Gruber Guilarte & Reformas. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
