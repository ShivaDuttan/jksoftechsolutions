import { HeroSection } from './home-sections/HeroSection';
import { WhatWeDoSection } from './home-sections/WhatWeDoSection';
import { WhyUsSection } from './home-sections/WhyUsSection';
import { EcosystemSection } from './home-sections/EcosystemSection';
import { ServicesSection } from './home-sections/ServicesSection';
import { ProcessSection } from './home-sections/ProcessSection';
import { FounderSection } from './home-sections/FounderSection';
import { FinalCTASection } from './home-sections/FinalCTASection';
import { AboutSection } from './home-sections/AboutSection';
import { GallerySection } from './home-sections/GallerySection';
import { ContactSection } from './home-sections/ContactSection';

export function Home() {
  return (
    <>
      <section id="home" className="scroll-mt-20 sm:scroll-mt-24">
        <HeroSection />
        <WhatWeDoSection />
        <WhyUsSection />
        <EcosystemSection />
      </section>
      
      <section id="services" className="scroll-mt-20 sm:scroll-mt-24">
        <ServicesSection />
        <ProcessSection />
      </section>
      
      <section id="gallery" className="scroll-mt-20 sm:scroll-mt-24">
        <GallerySection />
      </section>
      
      <section id="about" className="scroll-mt-20 sm:scroll-mt-24">
        <AboutSection />
        <FounderSection />
      </section>

      <section id="contact" className="scroll-mt-20 sm:scroll-mt-24">
        <ContactSection />
        <FinalCTASection />
      </section>
    </>
  );
}
