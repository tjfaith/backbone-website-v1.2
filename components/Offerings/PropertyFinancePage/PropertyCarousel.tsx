"use client";

import { Icon } from "@iconify/react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ReactNode } from "react";

import { OfferingImg12, OfferingImg13 } from "@/public/assets";

type Property = {
  id: number;
  tag: string;
  tagIcon: string;
  tagColor: string;
  image: string;
  title: string;
  location: string;
  price: string | ReactNode;
  size: string;
  sizeIcon: string;
  rooms: number;
  roomsIcon: string;
};

const properties: Property[] = [
  {
    id: 1,
    tag: "Property Finance",
    tagIcon: "ri:building-2-fill",
    tagColor: "bg-[#E0F5FF] text-[#50BFF6]",
    image: OfferingImg12.src,
    title: "Harold Court",
    location: "7 Johnson avenue, Owa way Railway road, Lagos, Nigeria",
    price: "$250,000",
    size: "200m²",
    sizeIcon: "ri:ruler-2-fill",
    rooms: 4,
    roomsIcon: "ri:home-8-fill",
  },
  {
    id: 2,
    tag: "Rent Finance",
    tagIcon: "ri:building-2-fill",
    tagColor: "bg-orange-100 text-orange-600",
    image: OfferingImg13.src,
    title: "New Age Apartment",
    location: "23, Sunny road, Urban District",
    price: (
      <>
        $50,000/
        <span className="text-white/50 text-lg sm:text-[22px] tracking-[-0.11px]">
          Month
        </span>
      </>
    ),
    size: "150m²",
    sizeIcon: "ri:ruler-2-fill",
    rooms: 3,
    roomsIcon: "ri:home-8-fill",
  },
];

const PropertyCarousel = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const replaceLastThreeWithDots = (text: string) => {
    return text.replace(/(\w{3})$/, "...");
  };

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex gap-4 sm:gap-6 h-full">
        {properties.map((item) => (
          <div
            key={item.id}
            className="
              relative
              min-w-[280px]
              sm:min-w-[320px]
              md:min-w-[420px]
              h-full
              rounded-2xl
              overflow-hidden
            "
          >
            {/* Image */}
            <Image
              alt={item.title}
              className="
                w-full
                object-cover
                object-bottom
                scale-110
                sm:scale-125
                h-[360px]
                sm:h-[420px]
                md:h-[440px]
              "
              height={400}
              width={600}
              src={item.image}
            />

            {/* Top Tag */}
            <div
              className={`absolute top-3 sm:top-4 left-3 sm:left-4 p-2 text-xs font-medium rounded-full flex items-center gap-2 ${item.tagColor}`}
            >
              <Icon icon={item.tagIcon} />
              <span>{item.tag}</span>
            </div>

            {/* Bottom Overlay */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                px-4
                py-5
                sm:py-6
                bg-gradient-to-b
                from-[rgba(255,255,255,0)]
                to-[rgba(255,255,255,0.05)]
                backdrop-blur-[2px]
                text-white
              "
            >
              <h3 className="font-medium clash-display-font text-lg sm:text-xl leading-6 sm:leading-7">
                {item.title}
              </h3>

              <div className="text-xs sm:text-sm font-base text-white/80 tracking-[-0.084px]">
                {replaceLastThreeWithDots(item.location)}
              </div>

              <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span className="text-2xl sm:text-3xl font-semibold clash-display-font">
                  {item.price}
                </span>

                <div className="flex items-center gap-4 text-xs opacity-90">
                  <div className="flex items-start gap-1.5">
                    <Icon className="mt-0.5" icon={item.sizeIcon} />
                    <div>
                      <span>{item.size}</span>
                      <div className="text-white/80 font-normal leading-4">
                        Living
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-sm sm:text-base font-medium leading-6 tracking-[-0.176px]">
                      <Icon className="mt-0.5" icon={item.roomsIcon} />
                      <span>{item.rooms}</span>
                    </div>
                    <div className="text-white/80 font-normal leading-4">
                      Rooms
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Overlay */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCarousel;
