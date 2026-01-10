"use client";
import { OfferingHeroContent, OfferingHeroImage } from "@/components";
import { ReactNode } from "react";

interface Props {
  heroData: {
    content: {
      title: string | ReactNode;
      description: string | ReactNode;
    };
    imageSection: {
      images: string[];
      toastCards?: ReactNode;
    };
  };
}

const OfferingHeroSection = ({ heroData }: Props) => {
  return (
    <div className="min-h-screen flex items-center overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center page-max-width w-full gap-12">
        <OfferingHeroContent content={heroData.content} />
        <OfferingHeroImage imageSection={heroData.imageSection} />
      </div>
    </div>
  );
};

export default OfferingHeroSection;
