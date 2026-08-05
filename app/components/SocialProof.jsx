import Image from "next/image";

export default function SocialProof() {
  return (
    <div className="space-y-12 w-full">
      {/* SOCIAL PROOF & TRUST SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Community & Avatars */}
        <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 glow-card-hover">
          <div className="flex items-center">
            <div className="flex -space-x-3 mr-4">
              <div className="w-12 h-12 rounded-full border-2 border-deep-purple relative overflow-hidden shadow-lg">
                <Image src="/assets/user1.png" alt="Usuario VIP Ganamos" fill className="object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-deep-purple relative overflow-hidden shadow-lg">
                <Image src="/assets/user2.png" alt="Usuario VIP Ganamos" fill className="object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-deep-purple relative overflow-hidden shadow-lg">
                <Image src="/assets/user3.png" alt="Usuario VIP Ganamos" fill className="object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-deep-purple bg-neon-purple flex items-center justify-center text-white font-extrabold text-sm shadow-lg">
                +5k
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white text-base font-heading">Comunidad Ganadora</h4>
              <p className="text-xs text-neon-purple font-semibold uppercase tracking-wider">Acceso VIP Activo las 24hs</p>
            </div>
          </div>
          <div className="text-right sm:text-right text-center">
            <span className="text-xs text-gray-400 block">Jugadores en línea</span>
            <span className="text-lg font-bold text-neon-green">🟢 1.420 activos</span>
          </div>
        </div>

        {/* Trustpilot Badge */}
        <div className="glass-card rounded-2xl p-6 flex items-center justify-between glow-card-hover">
          <div>
            <h4 className="font-bold text-white text-base mb-1 font-heading">&quot;Servicio de Excelencia&quot;</h4>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-[#00b67a] p-1 rounded">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1 font-semibold">Trustpilot Rating</p>
            <p className="font-extrabold text-3xl text-white font-heading">4.9<span className="text-lg text-gray-400">/5</span></p>
          </div>
        </div>
      </div>

      {/* REVIEWS & TESTIMONIALS SECTION */}
      <section className="w-full space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white font-heading">Lo que dicen nuestros usuarios</h2>
          <p className="text-sm text-gray-300">Más de 50.000 operaciones exitosas acreditadas al instante</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl space-y-4 relative">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full relative overflow-hidden border border-neon-purple">
                <Image src="/assets/user1.png" alt="Testimonio Ganamos" fill className="object-cover" />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Gonzalo M.</h5>
                <span className="text-[11px] text-neon-green">Verificado • Retiró $35.000</span>
              </div>
            </div>
            <p className="text-xs text-gray-300 italic leading-relaxed">
              &quot;Increíble la rapidez de los retiros. Pedí un retiro a las 3 AM por Mercado Pago y en 2 minutos ya tenía la plata acreditada. Recomendadísimo 100%.&quot;
            </p>
            <div className="text-yellow-400 text-xs">★★★★★</div>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-4 relative">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full relative overflow-hidden border border-neon-purple">
                <Image src="/assets/user2.png" alt="Testimonio Ganamos" fill className="object-cover" />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Camila R.</h5>
                <span className="text-[11px] text-neon-green">Verificada • Retiró $18.000</span>
              </div>
            </div>
            <p className="text-xs text-gray-300 italic leading-relaxed">
              &quot;Excelente atención por WhatsApp. Te responden al toque sin vueltas y podés cargar desde $1.000 con Ualá. Sigan así!&quot;
            </p>
            <div className="text-yellow-400 text-xs">★★★★★</div>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-4 relative">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full relative overflow-hidden border border-neon-purple">
                <Image src="/assets/user3.png" alt="Testimonio Ganamos" fill className="object-cover" />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Esteban K.</h5>
                <span className="text-[11px] text-neon-green">Verificado • Retiró $62.000</span>
              </div>
            </div>
            <p className="text-xs text-gray-300 italic leading-relaxed">
              &quot;La mejor plataforma de Argentina sin dudas. Siempre disponibles 24 horas y los premios se pagan al momento por CBU.&quot;
            </p>
            <div className="text-yellow-400 text-xs">★★★★★</div>
          </div>
        </div>
      </section>
    </div>
  );
}
