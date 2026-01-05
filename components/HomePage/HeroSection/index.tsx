import { HeroContent, HeroImage } from "@/components";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center page-max-width w-full gap-12">
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;
