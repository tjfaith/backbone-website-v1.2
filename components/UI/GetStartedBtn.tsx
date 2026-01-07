import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { cn } from "@heroui/theme";
import React from "react";

interface Props {
  className?: string;
}
const GetStartedBtn = ({ className }: Props) => {
  return (
    <>
      <Button
        as={Link}
        className={cn(
          "text-background !py-3 text-sm font-medium rounded-[10px]",
          className
        )}
        color="primary"
        href={`${process.env.NEXT_PUBLIC_APP_URL}/welcome`}
        size="md"
      >
        Get Started Now
      </Button>
    </>
  );
};

export default GetStartedBtn;
