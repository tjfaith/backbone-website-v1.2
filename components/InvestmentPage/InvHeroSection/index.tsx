import { HeroContent, HeroImage, InvHeroContent } from "@/components";

const InvHeroSection = () => {
  return (
    <div className="min-h-screen flex items-center overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center page-max-width w-full gap-12">
        <InvHeroContent />
        <HeroImage />
      </div>
    </div>
  );
};

export default InvHeroSection;
