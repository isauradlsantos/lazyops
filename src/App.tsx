import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BottleneckSection from './components/BottleneckSection';
import GrowthSprintSection from './components/GrowthSprintSection';
import ScopeSection from './components/ScopeSection';
import WhyChooseSection from './components/WhyChooseSection';
import ProofSection from './components/ProofSection';
import NextStepsSection from './components/NextStepsSection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <BottleneckSection />
      <GrowthSprintSection />
      <ScopeSection />
      <WhyChooseSection />
      <ProofSection />
      <NextStepsSection />
      <Footer />
      <CookieBanner />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;