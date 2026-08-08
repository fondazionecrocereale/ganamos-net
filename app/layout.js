import Script from "next/script";
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

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (!window.__fbq_initialized) {
                window.__fbq_initialized = true;
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '872310448557591');
              }
              if (!window.__pageview_sent) {
                window.__pageview_sent = true;
                fbq('track', 'PageView', {}, { test_event_code: 'TEST6108' });
              }
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=872310448557591&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
      </body>
    </html>
  );
}
