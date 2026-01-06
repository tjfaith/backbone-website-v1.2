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
<<<<<<< HEAD
          "text-background !py-3 text-base font-medium rounded-[10px]",
          className
        )}
        color="primary"
        href={`${process.env.NEXT_PUBLIC_APP_URL}/welcome`}
        size="lg"
=======
          "text-background !px-6 !py-3 text-base font-medium rounded-[10px]",
          className
        )}
        color="primary"
        href={`${process.env.NEXT_PUBLIC_APP_URL}/sign-up`}
        // size="sm"
>>>>>>> e748c6c6a03f1be5b9e5c508d7f7de45ab427e50
      >
        Get Started Now
      </Button>
    </>
  );
};

export default GetStartedBtn;
