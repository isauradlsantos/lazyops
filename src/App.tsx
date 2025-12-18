import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BottleneckSection from './components/BottleneckSection';
import GrowthSprintSection from './components/GrowthSprintSection';
import ProofSection from './components/ProofSection';
import ScopeSection from './components/ScopeSection';
import WhyChooseSection from './components/WhyChooseSection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <BottleneckSection />
      <GrowthSprintSection />
      <ProofSection />
      <ScopeSection />
      <WhyChooseSection />
      <Footer />
      <CookieBanner />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;