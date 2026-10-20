import type { Page } from '../../lib/navigation';
import { ContactSection } from './ContactSection';
import { HeroSection } from './HeroSection';
import { HowItWorksSection } from './HowItWorksSection';
import { PhysicalAiSection } from './PhysicalAiSection';
import { PlatformBanner } from './PlatformBanner';
import { RobotsSection } from './RobotsSection';
import { ServicesSection } from './ServicesSection';

/** Sections alternate navy and white, as on the main site. */
export function HomePage({ onOpenPage }: { onOpenPage: (page: Page) => void }) {
  return (
    <>
      <HeroSection />
      <ServicesSection onOpenPage={onOpenPage} />
      <RobotsSection />
      <PlatformBanner />
      <PhysicalAiSection />
      <HowItWorksSection />
      <ContactSection />
    </>
  );
}
