import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Limpieza Profesional en Alicante | Fin de Obra, Turística y General",
  description:
    "Servicios de limpieza profesional en Alicante: fin de obra, hoteles y apartamentos turísticos, limpieza residencial y desinfección con protocolos certificados.",
};

const serviceBlocks = [
  {
    title: "Limpieza Especializada de Fin de Obra (Post-Construcción)",
    focus:
      "Eliminación total de residuos de construcción, polvo fino y restos de pintura para entregar el espacio listo para habitar.",
    bullets: [
      "Limpieza profunda y desengrasado de superficies y azulejos.",
      "Aspirado y tratamiento del polvo de obra en techos y paredes.",
      "Limpieza a fondo de cristales, marcos y persianas.",
      "Desinfección de baños y cocinas previo a su uso.",
    ],
    icon: "🧹",
  },
  {
    title: "Limpieza para el Sector Turístico (Hoteles, Airbnb, Booking)",
    focus:
      "Servicios de check-out a check-in rápidos y eficientes con protocolos de desinfección para máxima satisfacción del huésped.",
    bullets: [
      "Hoteles y Apartamentos Turísticos: limpieza y reposición de amenities y lencería.",
      "Limpieza Express para Cambios de Huéspedes: entregas en tiempo récord.",
      "Desinfección Certificada: productos profesionales alineados con normativas vigentes.",
    ],
    icon: "🏨",
  },
  {
    title: "Limpieza Residencial y General (Casas, Chalets y Particulares)",
    focus:
      "Planes de mantenimiento periódico para propiedades de alto nivel en la Comunidad Valenciana.",
    bullets: [
      "Limpieza exhaustiva de interiores, terrazas y zonas comunes.",
      "Limpieza semanal, quincenal o mensual a medida.",
      "Limpieza de primavera, tras eventos o a fondo de garajes.",
    ],
    icon: "🏡",
  },
];

const reasons = [
  "Personal propio formado en protocolos de higiene avanzados y de confianza.",
  "Equipamiento industrial y productos específicos para cada superficie, incluida suciedad de obra.",
  "Garantía de satisfacción: revisión final y puntualidad en cada entrega.",
  "Cobertura ágil en Alicante capital, Elche, San Juan, Benidorm y alrededores.",
];

export default function LimpiezaPage() {
  return (
    <main className="bg-white text-gray-900">
      <Header />

      <section className="pt-28 pb-16 bg-gradient-to-br from-orange-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-white border border-orange-100 px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-orange-600">
            <span className="text-lg">🧼</span>
            <span>Limpieza Profesional en Alicante</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 leading-tight">
            LIMPIEZA PROFESIONAL EN ALICANTE: FIN DE OBRA, TURÍSTICA Y GENERAL
          </h1>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-4xl">
            Guilarte & Servicios es su proveedor de confianza para la gestión
            integral de la limpieza en la provincia de Alicante. Ofrecemos
            soluciones de higiene y desinfección adaptadas a cualquier
            necesidad: desde la entrega impecable de una reforma hasta el
            riguroso protocolo de limpieza de hoteles y apartamentos turísticos
            (Airbnb/Booking). Garantizamos rapidez, discreción y resultados
            perfectos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/34674302128?text=Hola,%20quiero%20información%20sobre%20limpieza%20profesional"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition-colors text-center"
            >
              Solicitar tarifas de limpieza
            </a>
            <a
              href="tel:+34674302128"
              className="px-8 py-4 rounded-full border-2 border-orange-200 text-orange-700 hover:bg-orange-50 font-semibold transition-colors text-center"
            >
              Llamar ahora
            </a>
          </div>
          <p className="text-sm text-gray-600">
            Cobertura completa en Comunidad Valenciana · Respuesta rápida ·
            Equipos propios
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Servicios especializados de limpieza
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              La línea de limpieza de Guilarte & Servicios complementa la
              reforma y cubre el espectro completo del mercado inmobiliario en
              la Comunidad Valenciana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceBlocks.map((service) => (
              <div
                key={service.title}
                className="h-full bg-gray-50 border border-orange-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-800 font-semibold mb-4">
                  Enfoque: {service.focus}
                </p>
                <ul className="space-y-3 text-gray-700">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              ¿Por qué elegir a Guilarte & Servicios para la limpieza?
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl">
              Equipos propios, protocolos certificados y alcance en toda la
              Comunidad Valenciana.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 bg-gray-800 border border-gray-700 rounded-xl p-5"
              >
                <span className="text-orange-400 text-xl">✔</span>
                <p className="text-gray-100">{reason}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/34674302128?text=Hola,%20quiero%20agendar%20limpieza%20profesional"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-gray-900 hover:bg-gray-100 font-semibold text-center transition-colors"
            >
              Agendar limpieza
            </a>
            <a
              href="mailto:gruberhawk@gmail.com"
              className="px-8 py-4 rounded-full border-2 border-gray-700 text-white hover:bg-gray-800 font-semibold text-center transition-colors"
            >
              Escribir un correo
            </a>
          </div>
        </div>
      </section>

      <Contact />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
