import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import FeaturesShowcase from '@/components/FeaturesShowcase';
import TabbedFeatures from '@/components/TabbedFeatures';
import BentoGrid from '@/components/BentoGrid';
import DownloadSection from '@/components/DownloadSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LogoMarquee />
      <FeaturesShowcase />
      <TabbedFeatures />
      <BentoGrid />
      <DownloadSection />
      <CTABanner
        headline="Your team's efficiency. Visualized live."
        subheadline="Know exactly what's happening, every second."
        cta="Start your free trial"
        badge="14 days • No credit card"
      />
      <Footer />
    </div>
  );
};

export default Index;
