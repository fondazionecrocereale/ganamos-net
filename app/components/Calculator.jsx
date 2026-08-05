"use client";

import { useState } from "react";

export default function Calculator() {
  const [amount, setAmount] = useState(84000);

  const formatNumber = (num) => {
    return new Intl.NumberFormat("es-AR").format(num);
  };

  const handleInputChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) val = 1000;
    setAmount(val);
  };

  const handleSliderChange = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };

  return (
    <section className="w-full glass-card rounded-3xl p-8 space-y-6 border border-neon-purple/30 relative" id="calculadora">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-white font-heading">Calculadora de Carga y Retiros</h2>
          <p className="text-xs text-gray-400">Simula tu carga y mirá tus beneficios VIP al instante</p>
        </div>
        <span className="px-3 py-1 bg-neon-green/20 text-neon-green border border-neon-green/30 text-xs font-bold rounded-full">
          BONUS VIP 24/7
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Input & Slider */}
        <div className="space-y-4">
          <label htmlFor="amountInput" className="block text-sm font-medium text-gray-300">
            ¿Cuánto querés cargar?
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-neon-purple">$</span>
            <input
              type="number"
              id="amountInput"
              value={amount}
              onChange={handleInputChange}
              min="1000"
              step="500"
              className="w-full bg-black/40 border border-neon-purple/40 rounded-2xl py-4 pl-10 pr-4 text-2xl font-bold text-white focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/30 transition-all"
            />
          </div>

          <div>
            <input
              type="range"
              id="amountSlider"
              min="1000"
              max="100000"
              step="1000"
              value={amount}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-neon-purple"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Mínimo $1.000</span>
              <span>$50.000</span>
              <span>$100.000</span>
            </div>
          </div>
        </div>

        {/* Live Results Box */}
        <div className="bg-deep-purple/80 p-6 rounded-2xl border border-neon-purple/30 space-y-4 text-center sm:text-left">
          <div className="flex justify-between items-center text-sm border-b border-white/10 pb-3">
            <span className="text-gray-400">Fichas Acreditadas:</span>
            <span className="font-bold text-white text-lg">{formatNumber(amount)} pts</span>
          </div>
          <div className="flex justify-between items-center text-sm border-b border-white/10 pb-3">
            <span className="text-gray-400">Tiempo estimado de carga:</span>
            <span className="font-bold text-neon-green text-sm flex items-center gap-1">
              ⚡ Instantáneo (&lt; 1 min)
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Atención Directa:</span>
            <span className="font-bold text-neon-cyan">Agente VIP Asignado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
