import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Reformas Integrales en Alicante | Cocinas y Baños llave en mano",
  description:
    "Reformas integrales, cocinas y baños en Alicante. Gestión de licencias, plazos y acabados premium con Guilarte & Servicios.",
};

const highlights = [
  {
    title: "Reformas de Cocinas y Baños",
    detail:
      "Diseños modernos, materiales de primera y ejecución limpia para espacios listos para disfrutar.",
    icon: "🍽️",
  },
  {
    title: "Gestión Total del Proyecto",
    detail:
      "Planificación, licencias, permisos y coordinación de gremios para que no tengas que preocuparte por nada.",
    icon: "📋",
  },
  {
    title: "Calidad y Puntualidad",
    detail:
      "Compromiso de entrega en fecha y control de calidad en cada fase de obra en toda la provincia de Alicante.",
    icon: "⏱️",
  },
];

const steps = [
  "Visita técnica y escucha activa de tus necesidades.",
  "Propuesta de diseño y materiales con presupuesto cerrado.",
  "Planificación de licencias y calendario de obra.",
  "Ejecución coordinada con inspecciones de calidad.",
  "Entrega llave en mano y limpieza profesional final.",
];

export default function ReformasPage() {
  return (
    <main className="bg-white text-gray-900">
      <Header />

      <section className="pt-28 pb-16 bg-gradient-to-br from-orange-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-white border border-orange-100 px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-orange-600">
            <span className="text-lg">🏗️</span>
            <span>Reformas Integrales en Alicante</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 leading-tight">
            Reformas integrales llave en mano: cocinas, baños y viviendas
            completas
          </h1>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-4xl">
            Transformamos pisos y locales con un equipo único que coordina
            diseño, licencias y ejecución. Desde cocinas y baños de alta calidad
            hasta reformas completas, gestionamos cada detalle para que
            disfrutes de un resultado impecable sin estrés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/34674302128?text=Hola,%20quiero%20presupuesto%20para%20una%20reforma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition-colors text-center"
            >
              Pedir presupuesto de reforma
            </a>
            <a
              href="/servicios-limpieza-alicante"
              className="px-8 py-4 rounded-full border-2 border-orange-200 text-orange-700 hover:bg-orange-50 font-semibold transition-colors text-center"
            >
              Añadir limpieza post-obra
            </a>
          </div>
          <p className="text-sm text-gray-600">
            Provincia de Alicante · Gestión integral · Acabados premium
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Especialistas en reformas de alto impacto
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              Materiales de primera, diseño funcional y cumplimiento riguroso de
              plazos en toda la Comunidad Valenciana.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="h-full bg-gray-50 border border-orange-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Proceso de reforma sin estrés
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl">
              Un método claro para entregarte tu vivienda lista, con limpieza
              final incluida si la necesitas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-3 bg-gray-800 border border-gray-700 rounded-xl p-5"
              >
                <span className="text-orange-400 font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-100">{step}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/34674302128?text=Hola,%20quiero%20planificar%20mi%20reforma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-gray-900 hover:bg-gray-100 font-semibold text-center transition-colors"
            >
              Coordinar visita técnica
            </a>
            <a
              href="mailto:gruberhawk@gmail.com"
              className="px-8 py-4 rounded-full border-2 border-gray-700 text-white hover:bg-gray-800 font-semibold text-center transition-colors"
            >
              Enviar planos o idea
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
