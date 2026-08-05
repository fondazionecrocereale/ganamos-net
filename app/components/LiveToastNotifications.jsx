"use client";

import { useState, useEffect } from "react";

const sampleToasts = [
  { name: "Lucas M.", action: "retiró $24.500", time: "hace 1 min", type: "retiro" },
  { name: "Florencia S.", action: "cargó $5.000", time: "hace 2 min", type: "carga" },
  { name: "Facundo R.", action: "retiró $48.000", time: "hace 3 min", type: "retiro" },
  { name: "Valentina G.", action: "cargó $10.000", time: "hace 4 min", type: "carga" },
  { name: "Joaquín P.", action: "retiró $15.000", time: "hace 5 min", type: "retiro" },
  { name: "Martín B.", action: "retiró $32.000", time: "hace 1 min", type: "retiro" }
];

export default function LiveToastNotifications() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const triggerToast = () => {
      const item = sampleToasts[Math.floor(Math.random() * sampleToasts.length)];
      const id = Date.now();
      
      setToasts((prev) => [...prev, { ...item, id }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4500);
    };

    const initialTimeout = setTimeout(triggerToast, 3000);
    const interval = setInterval(triggerToast, 12000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 space-y-2 pointer-events-none max-w-xs hidden sm:block">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="glass-card bg-[#1a0730]/95 border border-neon-purple/40 text-white p-3 rounded-2xl shadow-2xl flex items-center space-x-3 toast-slide pointer-events-auto transition-all"
        >
          <div
            className={`w-8 h-8 rounded-full ${
              toast.type === "retiro"
                ? "bg-neon-green/20 text-neon-green"
                : "bg-neon-cyan/20 text-neon-cyan"
            } flex items-center justify-center font-bold text-xs`}
          >
            {toast.type === "retiro" ? "💸" : "⚡"}
          </div>
          <div className="text-xs">
            <p className="font-bold text-white">
              {toast.name}{" "}
              <span
                className={
                  toast.type === "retiro" ? "text-neon-green" : "text-neon-cyan"
                }
              >
                {toast.action}
              </span>
            </p>
            <span className="text-[10px] text-gray-400">
              {toast.time} • Mercado Pago / Ualá
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
