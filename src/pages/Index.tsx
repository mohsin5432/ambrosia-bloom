import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import ExperienceSection from '@/components/ExperienceSection';
import IngredientsSection from '@/components/IngredientsSection';
import ShopSection from '@/components/ShopSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <JourneySection />
      <ExperienceSection />
      <IngredientsSection />
      <ShopSection />
      <Footer />
    </div>
  );
};

export default Index;
