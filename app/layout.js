import "./globals.css";

export const metadata = {
  title: "Ganamos Net - Atención 24/7 & Retiros Inmediatos",
  description: "Ganamos Net: Tu plataforma de confianza con atención las 24hs, carga mínima $1.000, retiro mínimo $4.000 y transferencias instantáneas por Mercado Pago, Ualá y CBU.",
  keywords: ["Ganamos Net", "Gana Premium", "cargas 24/7", "retiros inmediatos", "mercado pago", "uala", "casino online argentina"],
  openGraph: {
    title: "Ganamos Net - Atención 24/7 & Retiros Inmediatos",
    description: "Cargas desde $1.000, retiros desde $4.000 las 24 horas del día. Pagos al instante.",
    images: ["/assets/logo.png"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-neon-purple selection:text-white flex flex-col min-h-screen relative font-sans">
        {children}
      </body>
    </html>
  );
}
