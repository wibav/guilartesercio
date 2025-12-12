"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿En qué zonas de Alicante trabajáis?",
      answer:
        "Trabajamos en toda la provincia de Alicante y alrededores. Contacta con nosotros para confirmar disponibilidad en tu zona.",
    },
    {
      question: "¿Cuánto tiempo tarda una reforma integral?",
      answer:
        "Depende del tamaño y complejidad del proyecto. Una reforma de apartamento puede tardar 4-6 semanas, mientras que proyectos más grandes pueden requerir 2-3 meses. Te daremos un cronograma detallado en el presupuesto.",
    },
    {
      question: "¿Ofrecéis garantía en vuestros trabajos?",
      answer:
        "Sí, todos nuestros trabajos cuentan con garantía. Los materiales y la mano de obra están cubiertos según lo establecido en cada contrato.",
    },
    {
      question: "¿El presupuesto es gratuito?",
      answer:
        "Sí, ofrecemos presupuestos gratuitos y sin compromiso. Visitamos tu propiedad, evaluamos las necesidades y te entregamos un presupuesto detallado.",
    },
    {
      question: "¿Necesito permisos para una reforma?",
      answer:
        "Depende del tipo de reforma. Las reformas que afectan a la estructura, fachada o instalaciones comunitarias requieren licencia. Te asesoramos en todo el proceso.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gray-50 hover:bg-gray-100 p-6 rounded-lg text-left transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-yellow-500 transform transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="bg-white p-6 border-l-4 border-yellow-500 ml-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
