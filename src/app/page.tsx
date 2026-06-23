import { HeroSection } from '@/components/sections/hero';
import { TrustedBySection } from '@/components/sections/trusted-by';
import { AboutSection } from '@/components/sections/about';
import { CapabilitiesSection } from '@/components/sections/capabilities';
import { ManufacturingJourneySection } from '@/components/sections/manufacturing-journey';
import { SustainabilitySection } from '@/components/sections/sustainability';

import { LifeAtStyleSection } from '@/components/sections/life-at-style';
import { AwardsSection } from '@/components/sections/awards';
import { ContactSection } from '@/components/sections/contact';
import { FooterSection } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <CapabilitiesSection />
      <ManufacturingJourneySection />
      <SustainabilitySection />

      <LifeAtStyleSection />
      <AwardsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
