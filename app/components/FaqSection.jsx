export default function FaqSection() {
  const faqs = [
    {
      q: "¿Cuál es el monto mínimo de carga y retiro?",
      a: "El monto de carga mínima es de $1.000 ARS y el retiro mínimo es de $4.000 ARS. Podés realizar las operaciones que quieras las 24 horas del día."
    },
    {
      q: "¿Cuánto tardan los retiros?",
      a: "Nuestros retiros son inmediatos y automatizados. El tiempo promedio de acreditación en tu cuenta (Mercado Pago, Ualá o CBU) es de 1 a 3 minutos las 24hs del día."
    },
    {
      q: "¿Qué medios de pago aceptan?",
      a: "Aceptamos Mercado Pago, Ualá, Cuenta DNI, Personal Pay, Lemon Cash, Belo y transferencias desde cualquier banco o billetera virtual de Argentina."
    },
    {
      q: "¿Cómo me pongo en contacto para cargar?",
      a: "Simplemente hacé clic en cualquiera de los botones de CONTACTAR POR WHATSAPP en esta página. Se abrirá un chat directo con nuestros cajeros oficiales listos para atenderte al instante."
    }
  ];

  return (
    <section className="w-full glass-card rounded-3xl p-8 space-y-6" id="faq">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-extrabold text-white font-heading">Preguntas Frecuentes</h2>
        <p className="text-sm text-gray-300">Todo lo que necesitás saber sobre Ganamos Net</p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <details key={index} className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all">
            <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-white text-base select-none">
              <span>{faq.q}</span>
              <span className="text-neon-purple group-open:rotate-180 transition-transform font-mono text-xl">+</span>
            </summary>
            <div className="px-5 pb-5 text-sm text-gray-300 border-t border-white/5 pt-3 leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
