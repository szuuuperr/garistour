import Navbar from "@/sections/navbar";
import HeroSection from "@/sections/hero-section";
import PopularSection from "@/sections/popular-section";
import PricingSection from "@/sections/pricing-section";
import CaraPesanSection from "@/sections/cara-pesan-section";
import GaleriCustomerSection from "@/sections/galeri-customer-section";
import TestimoniSection from "@/sections/testimoni-section";
import KirimSection from "@/sections/kirim-section";
import Footer from "@/sections/footer";
import WhatsAppFab from "@/components/blocks/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="flex flex-1 flex-col">
        <HeroSection />
        <PopularSection />
        <PricingSection />
        <CaraPesanSection />
        <GaleriCustomerSection />
        <TestimoniSection />
        <KirimSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
