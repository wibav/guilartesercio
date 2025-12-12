"use client";

export default function Services() {
  const services = [
    {
      title: "Reformas Integrales",
      description:
        "Transformamos tu hogar completamente con diseños modernos y funcionales",
      icon: "🏠",
    },
    {
      title: "Cocinas",
      description:
        "Diseño y reforma de cocinas con materiales de primera calidad",
      icon: "🔨",
    },
    {
      title: "Baños",
      description: "Renovación completa de baños con acabados de lujo",
      icon: "🚿",
    },
    {
      title: "Albañilería",
      description: "Trabajos de construcción y restauración profesional",
      icon: "🧱",
    },
    {
      title: "Pintura",
      description: "Servicios de pintura interior y exterior",
      icon: "🎨",
    },
    {
      title: "Electricidad",
      description: "Instalaciones eléctricas seguras y certificadas",
      icon: "⚡",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Construcción y servicios profesionales en Alicante
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-500"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
