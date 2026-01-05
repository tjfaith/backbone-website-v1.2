import { HeroContent, HeroImage } from "@/components";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center page-max-width overflow-hidden w-full gap-12">
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;
