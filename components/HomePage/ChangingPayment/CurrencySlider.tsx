"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { Icon } from "@iconify/react";
import { Chip } from "@heroui/chip";

const slides = [
  { icon: "emojione:flag-for-united-states", name: "USD" },
  { icon: "circle-flags:gb", name: "GBP" },
  { icon: "circle-flags:lang-ig", name: "NGN" },
  { icon: "circle-flags:lang-kri", name: "XAF" },
  { icon: "circle-flags:ca", name: "CAD" },
  { icon: "circle-flags:lang-de", name: "GER" },
  { icon: "circle-flags:gh", name: "GHA" },
  { icon: "circle-flags:sn", name: "SEN" },
  { icon: "circle-flags:cn", name: "CHN" },
  { icon: "circle-flags:ga", name: "GAB" },
  { icon: "circle-flags:mu", name: "MUR" },
];

const CurrencySlider = () => {
  return (
    <section className="flex flex-col gap-8">
      {[0, 1].map((index) => (
        <CurrencyRow key={index} index={index} />
      ))}
    </section>
  );
};

const CurrencyRow = ({ index }: { index: number }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1, stopOnInteraction: false }),
    AutoScroll({
      playOnInit: true,
      speed: 0.25,
      stopOnInteraction: false,
      direction: index % 2 === 0 ? "forward" : "backward",
    }),
  ]);

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex gap-4">
        {[...slides, ...slides].map((flag, idx) => (
          <Chip
            key={idx}
            className="border mr-4 bg-background-200 border-background-300"
            startContent={<Icon icon={flag.icon} />}
            variant="faded"
          >
            {flag.name}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default CurrencySlider;
