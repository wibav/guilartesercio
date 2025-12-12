"use client";

import Image from "next/image";

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reformas integrales realizadas con calidad y confianza
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 - Kitchen */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative aspect-[4/3] bg-gray-200">
              <Image
                src="/images/kitchen-modern.jpg"
                alt="Cocina moderna"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Cocina Moderna</h3>
                <p>Reforma integral con isla central</p>
              </div>
            </div>
          </div>

          {/* Project 2 - Bathroom */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative aspect-[4/3] bg-gray-200">
              <Image
                src="/images/bathroom-luxury.jpg"
                alt="Baño de lujo"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Baño de Lujo</h3>
                <p>Diseño contemporáneo y funcional</p>
              </div>
            </div>
          </div>

          {/* Project 3 - Living Room */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative aspect-[4/3] bg-gray-200">
              <Image
                src="/images/living-room.jpg"
                alt="Salón reformado"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Reforma Integral</h3>
                <p>Espacio abierto y luminoso</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/34674302128?text=Hola,%20me%20gustaría%20ver%20más%20proyectos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
          >
            Ver Más Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
