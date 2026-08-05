import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0214] py-10 px-4 text-center border-t border-white/10 mt-auto space-y-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full relative overflow-hidden">
            <Image src="/assets/logo.png" alt="Ganamos Net" fill className="object-cover" />
          </div>
          <span className="font-bold text-white">GANAMOS.NET</span>
          <span>© 2026 GANA PREMIUM. TODOS LOS DERECHOS RESERVADOS.</span>
        </div>
        <div className="flex space-x-6 text-gray-400">
          <a href="#limites" className="hover:text-neon-purple transition-colors">Términos</a>
          <a href="#calculadora" className="hover:text-neon-purple transition-colors">Límites</a>
          <a href="#faq" className="hover:text-neon-purple transition-colors">Ayuda 24/7</a>
        </div>
      </div>

      <div className="flex justify-center space-x-2 pt-2">
        <div className="w-2 h-2 rounded-full bg-neon-purple opacity-50"></div>
        <div className="w-2 h-2 rounded-full bg-neon-purple opacity-75"></div>
        <div className="w-2 h-2 rounded-full bg-neon-purple"></div>
      </div>
    </footer>
  );
}
