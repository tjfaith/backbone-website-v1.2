import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import React from "react";

interface Props {
  className?: string;
  imageClassName?: string;
  cardPros: {
    img: string;
    tag: {
      avatar: string;
      name: string;
      rating: number;
    };
  };
}
const TestimonyCard = ({ cardPros, className, imageClassName }: Props) => {
  return (
    <div className={cn("w-[312px] h-[449px] relative ", className)}>
      <Image
        removeWrapper
        className={cn(
          "object-cover object-[60%_50%] w-full h-full",
          imageClassName,
        )}
        src={cardPros.img}
      />
      <div className=" absolute inset-x-0 bottom-2 z-10 px-2">
        <div className="flex items-center justify-between text-white px-2 py-3 rounded-xl bg-black/70  backdrop-blur-[10px]">
          <div className="flex items-center gap-2">
            <Image
              removeWrapper
              alt="tag"
              className=" h-8 w-8 object-cover"
              radius="full"
              src={cardPros.tag.avatar}
            />
            <div className="clash-display-font text-xs font-medium leading-6 tracking-[-0.132px]">
              {cardPros.tag.name}
            </div>
          </div>
          <div className=" flex flex-col items-end">
            <div className="clash-display-font text-xs font-medium leading-4 tracking-[-0.132px]">
              {cardPros.tag.rating}/10
            </div>
            <div className=" text-[7px] font-normal leading-3 text-[#CACFD8]">
              Customer satisfaction
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
