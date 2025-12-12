"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-gray-50"
        aria-hidden="true"
      />
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1 space-y-8">
            {/* Logo Circular */}
            <div className="flex flex-row items-center gap-6">
              <div className="w-20 h-20 md:w-48 md:h-48 rounded-full bg-orange-50 shadow-2xl flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Guilarte & Servicios"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-orange-600">
                Reformas · Limpieza
              </h2>
            </div>

            {/* Contenido Principal */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-600 leading-tight">
                TRANSFORMAMOS Y MANTENEMOS TUS ESPACIOS: REFORMAS INTEGRALES Y
                LIMPIEZA PROFESIONAL EN ALICANTE.
              </h1>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl">
                En Guilarte & Servicios somos tu socio de confianza en la
                Comunidad Valenciana para la transformación y el cuidado de
                inmuebles. Ofrecemos una solución &quot;todo en uno&quot;
                inigualable: desde la reforma integral llave en mano de tu piso
                o local, hasta el servicio de limpieza profesional que asegura
                la higiene y la entrega impecable de cualquier espacio. Olvídate
                de coordinar múltiples empresas; nosotros nos encargamos de
                todo, del diseño a la desinfección.
              </p>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300 text-center shadow-md hover:shadow-lg"
              >
                SOLICITA PRESUPUESTO
              </a>
              <a
                href="https://wa.me/34674302128"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-orange-600 font-semibold rounded-full border-2 border-orange-500 transition-all duration-300 text-center shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>📞</span> LLÁMANOS
              </a>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              📧 gruberhawk@gmail.com • 📱 +34 674 30 21 28
            </p>
          </div>

          {/* Bloques Visuales de Servicios */}
          <div className="flex-1 w-full">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏗️</span>
                  <p className="text-xs font-semibold tracking-wide text-orange-600 uppercase">
                    Reformas Integrales
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Transforma tu Hogar
                  </h3>
                  <p className="text-gray-700">
                    Especialistas en Reformas de Cocinas y Baños de alta
                    calidad. Gestionamos permisos y plazos en toda la provincia
                    de Alicante. ¡Pisos modernos sin preocupaciones!
                  </p>
                </div>
                <a
                  href="/reformas"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
                >
                  VER REFORMAS INTEGRALES
                </a>
              </div>

              <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-8 flex flex-col gap-4 text-white">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🧼</span>
                  <p className="text-xs font-semibold tracking-wide text-orange-300 uppercase">
                    Limpieza Profesional
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">
                    Cuidado Profesional Impecable
                  </h3>
                  <p className="text-gray-200">
                    Limpieza de fin de obra, apartamentos turísticos (Booking) y
                    hoteles. Garantía de desinfección para entregas rápidas y
                    seguras.
                  </p>
                </div>
                <a
                  href="/servicios-limpieza-alicante"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-400 text-gray-900 font-semibold transition-colors"
                >
                  TARIFAS DE LIMPIEZA TURÍSTICA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
