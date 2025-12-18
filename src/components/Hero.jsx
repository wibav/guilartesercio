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
            <div className="relative w-full max-w-xl mx-auto lg:ml-auto">
              <div
                className="absolute inset-x-6 -top-10 h-48 bg-orange-200/40 blur-3xl rounded-full hidden lg:block"
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-6 lg:gap-8">
                <div className="flex flex-wrap gap-4 justify-between items-center px-6 py-4 bg-white/80 backdrop-blur border border-orange-100 rounded-full shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center text-lg font-bold">
                      ⭐
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        +15 años de experiencia
                      </p>
                      <p className="text-xs text-gray-500">
                        Reformas integrales y mantenimiento continuo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">
                      24/7
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Soporte cercano
                      </p>
                      <p className="text-xs text-gray-500">
                        Atención personalizada en toda la provincia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 lg:gap-8 lg:min-h-[540px]">
                  <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-8 flex flex-col gap-5 lg:max-w-sm lg:self-start">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🏗️</span>
                        <p className="text-xs font-semibold tracking-wide text-orange-600 uppercase">
                          Reformas Integrales
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-orange-500 bg-orange-100 px-3 py-1 rounded-full">
                        Llave en mano
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Transforma tu Hogar
                      </h3>
                      <p className="text-gray-700">
                        Reformas de cocinas, baños y viviendas completas con
                        gestión de licencias, diseño interior y ejecución
                        coordinada de principio a fin.
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="text-orange-500">•</span> Planificación
                        y diseño 3D
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-orange-500">•</span> Materiales
                        premium y acabados impecables
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-orange-500">•</span> Supervisión
                        diaria de obra
                      </li>
                    </ul>
                    <a
                      href="/reformas"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
                    >
                      VER REFORMAS INTEGRALES
                    </a>
                  </div>

                  <div className="bg-gray-900 rounded-3xl shadow-2xl border border-gray-800 p-8 flex flex-col gap-5 text-white lg:max-w-sm lg:self-end">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🧼</span>
                        <p className="text-xs font-semibold tracking-wide text-orange-300 uppercase">
                          Limpieza Profesional
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-gray-900 bg-orange-300 px-3 py-1 rounded-full">
                        Entregas rápidas
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">
                        Cuidado Profesional Impecable
                      </h3>
                      <p className="text-gray-200">
                        Limpieza posobra, mantenimiento de apartamentos
                        turísticos y hoteles con protocolos de desinfección
                        certificados y equipo especializado.
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm text-orange-100/90">
                      <li className="flex items-center gap-2">
                        <span className="text-orange-300">•</span> Servicios
                        express para entregas urgentes
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-orange-300">•</span> Productos
                        ecológicos y antialérgicos
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-orange-300">•</span> Reporte
                        fotográfico antes y después
                      </li>
                    </ul>
                    <a
                      href="/servicios-limpieza-alicante"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-400 hover:bg-orange-300 text-gray-900 font-semibold transition-colors"
                    >
                      TARIFAS DE LIMPIEZA TURÍSTICA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
