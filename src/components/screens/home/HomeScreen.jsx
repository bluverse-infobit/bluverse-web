import HeroSection from "@/components/screens/home/section/HeroSection";
import ServicesSection from "@/components/screens/home/section/ServicesSection";
import AboutSection from "@/components/screens/home/section/AboutSection";
import ContactSection from "@/components/screens/home/section/ContactSection";

export default function HomeScreen() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
