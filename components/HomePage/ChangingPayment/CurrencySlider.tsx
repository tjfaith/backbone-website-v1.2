"use client";

import React, { useCallback, useRef } from "react";
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
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    autoplayRef.current,
    AutoScroll({
      playOnInit: true,
      speed: 1.5,
      stopOnInteraction: false,
      direction: index % 2 === 0 ? "forward" : "backward",
    }),
  ]);

  const handleMouseEnter = useCallback(() => {
    autoplayRef.current.stop();
  }, []);

  const handleMouseLeave = useCallback(() => {
    autoplayRef.current.play();
  }, []);

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
