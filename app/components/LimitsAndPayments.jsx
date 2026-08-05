import Image from "next/image";

export default function LimitsAndPayments() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" id="limites">
      {/* Limits Card */}
      <div className="glass-card rounded-3xl p-8 flex flex-col justify-between text-center space-y-6 glow-card-hover relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-32 h-32 bg-neon-purple/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Carga Mínima</h3>
            <p className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              $1.000 <span className="text-sm font-normal text-gray-400">ARS</span>
            </p>
          </div>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent mx-auto"></div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Retiro Mínimo</h3>
            <p className="text-5xl sm:text-6xl font-extrabold text-neon-purple glow-purple font-heading tracking-tight">
              $4.000 <span className="text-sm font-normal text-gray-300">ARS</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
          <div className="flex flex-col items-center bg-white/5 p-3 rounded-2xl border border-white/5">
            <svg className="h-6 w-6 text-neon-purple mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Original 100%</span>
            <span className="text-[10px] text-gray-400">Plataforma Oficial</span>
          </div>

          <div className="flex flex-col items-center bg-white/5 p-3 rounded-2xl border border-white/5">
            <svg className="h-6 w-6 text-neon-green mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Fast Retiro</span>
            <span className="text-[10px] text-gray-400">Pagos al Instante</span>
          </div>
        </div>
      </div>

      {/* Payment Methods Card */}
      <div className="glass-card rounded-3xl p-8 flex flex-col justify-between text-center space-y-6 glow-card-hover relative overflow-hidden">
        <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-neon-cyan/10 rounded-full blur-2xl pointer-events-none"></div>

        <div>
          <span className="inline-block px-3 py-1 bg-neon-purple/20 rounded-full text-neon-purple text-xs font-bold uppercase tracking-widest mb-3 border border-neon-purple/30">
            PAGOS SEGUROS
          </span>
          <h3 className="text-xl font-bold text-white font-heading">Medios De Pago Instantáneos</h3>
          <p className="text-xs text-gray-400 mt-1">Aceptamos todas las billeteras virtuales y bancos de Argentina</p>
        </div>

        {/* Payment Logos Grid */}
        <div className="flex justify-center items-center gap-4 py-4">
          {/* Bank Transfer */}
          <div className="bg-white rounded-2xl w-24 h-24 flex flex-col items-center justify-center p-2 shadow-xl hover:scale-105 transition-transform border border-white/20">
            <svg className="h-9 w-9 text-blue-900 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span className="text-[11px] font-extrabold text-blue-900">BANCOS / CBU</span>
          </div>

          {/* Mercado Pago */}
          <div className="bg-white rounded-2xl w-24 h-24 flex items-center justify-center p-2 shadow-xl hover:scale-105 transition-transform border border-white/20 relative overflow-hidden">
            <Image alt="Mercado Pago" src="/assets/mercado-pago.png" fill className="p-2 object-contain" />
          </div>

          {/* Ualá */}
          <div className="bg-white rounded-2xl w-24 h-24 flex items-center justify-center p-2 shadow-xl hover:scale-105 transition-transform border border-white/20 relative overflow-hidden">
            <Image alt="Ualá" src="/assets/uala.png" fill className="p-2 object-contain" />
          </div>
        </div>

        <div className="bg-white/5 p-3 rounded-2xl border border-white/5 flex justify-around items-center text-xs text-gray-300">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-green"></span>
            <span>Acreditación Automática</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-cyan"></span>
            <span>Sin Comisiones</span>
          </div>
        </div>
      </div>
    </div>
  );
}
