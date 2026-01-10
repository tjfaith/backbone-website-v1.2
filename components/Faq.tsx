"use client";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";

import { backboneColoredLogo } from "@/public/assets";

interface Props {
  faqData: Record<string, string>[];
}

const Faq = ({ faqData }: Props) => {
  return (
    <div className="py-12 sm:py-14" data-aos="fade-up" data-aos-duration="700">
      <div
        className="
          page-max-width
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-10
        "
        data-aos="fade-up"
        data-aos-delay="50"
      >
        {/* LEFT CONTENT */}
        <div data-aos="fade-right" data-aos-delay="100">
          <div className="text-primary text-[28px] sm:text-[32px] leading-9 sm:leading-10 tracking-[-0.16px] mb-2">
            Any questions? <br />
            We got you
          </div>

          <div
            className="
            text-primary-500
            font-normal
            leading-6
            tracking-[-0.176px]
            text-base
            mb-8
            max-w-sm
            pr-0
            sm:pr-10
          "
          >
            We’ve answered the most common questions to help you invest with
            clarity, confidence, and peace of mind.
          </div>

          <div data-aos="zoom-in" data-aos-delay="150">
            <Image
              disableAnimation
              disableSkeleton
              alt="backboneColoredLogo"
              className="
                w-[220px]
                sm:w-[280px]
                lg:w-[363px]
              "
              src={backboneColoredLogo.src}
            />
          </div>
        </div>

        {/* FAQ ACCORDION */}
        <div data-aos="fade-left" data-aos-delay="200">
          <Accordion
            showDivider
            className="px-0"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            selectionMode="multiple"
          >
            {faqData.map((question, index) => (
              <AccordionItem
                key={index}
                aria-label={`faq${index}`}
                classNames={{
                  base: "shadow-none mb-2",
                  heading: "font-medium h-10",
                  title: "text-xs md:text-sm",
                  content: "text-sm",
                  indicator: "text-gray-600",
                }}
                data-aos="fade-up"
                data-aos-delay={250 + index * 60}
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <div className="rounded-md p-1">
                      <Icon
                        className="rotate-90 text-base"
                        icon="ri:arrow-up-s-line"
                      />
                    </div>
                  ) : (
                    <div className="rounded-md p-1">
                      <Icon className="text-base" icon="ri:arrow-down-s-line" />
                    </div>
                  )
                }
                title={question.question}
              >
                <div>{question.answer}</div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
