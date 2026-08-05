import LiveStatusBar from "./components/LiveStatusBar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LimitsAndPayments from "./components/LimitsAndPayments";
import Calculator from "./components/Calculator";
import SocialProof from "./components/SocialProof";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import LiveToastNotifications from "./components/LiveToastNotifications";

export default function Home() {
  return (
    <>
      <LiveStatusBar />
      <Header />

      <main className="flex-grow flex flex-col items-center pt-8 px-4 pb-16 w-full max-w-5xl mx-auto space-y-16">
        <HeroSection />
        <LimitsAndPayments />
        <Calculator />
        <SocialProof />
        <FaqSection />
      </main>

      <Footer />
      <LiveToastNotifications />
    </>
  );
}
