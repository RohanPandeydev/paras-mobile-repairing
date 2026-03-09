import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import BrandsWeRepair from "@/components/BrandsWeRepair";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import BusinessTips from "@/components/BusinessTips";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <BrandsWeRepair />
      <Pricing />
      <Reviews />
      <BusinessTips />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  );
}
