import { HeroSection } from "@/components/HeroSection";
import { OurStory } from "@/components/OurStory";
import { Superpowers } from "@/components/Superpowers";
import { CapturedMoments } from "@/components/CapturedMoments";
import { FinalNote } from "@/components/FinalNote";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurStory />
      <Superpowers />
      <CapturedMoments />
      <FinalNote />
    </div>
  );
};

export default Index;
