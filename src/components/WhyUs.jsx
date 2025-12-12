"use client";

export default function WhyUs() {
  return (
    <section
      id="nosotros"
      className="py-20 bg-gradient-to-br from-yellow-500 to-yellow-600"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Calidad Garantizada
            </h3>
            <p className="text-white/90">
              Utilizamos materiales de primera calidad y técnicas profesionales
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <div className="text-6xl mb-4">⏱️</div>
            <h3 className="text-2xl font-bold text-white mb-3">Puntualidad</h3>
            <p className="text-white/90">
              Cumplimos con los plazos establecidos sin comprometer la calidad
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <div className="text-6xl mb-4">💯</div>
            <h3 className="text-2xl font-bold text-white mb-3">Experiencia</h3>
            <p className="text-white/90">
              Años de experiencia en reformas integrales en toda Alicante
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white text-xl md:text-2xl font-semibold max-w-3xl mx-auto leading-relaxed">
            &ldquo;Transformamos tu hogar en Alicante con reformas integrales,
            cocinas y baños de calidad y confianza&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
