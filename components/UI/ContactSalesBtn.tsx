import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { cn } from "@heroui/theme";
import React from "react";

interface Props {
  className?: string;
}
const ContactSalesBtn = ({ className }: Props) => {
  return (
    <Button
      as={Link}
      className={cn(
        "text-primary-500 text-base bg-background-200 px-6 py-5",
        className
      )}
      color="primary"
      variant="light"
      href="/contact-us"
      size="sm"
    >
      Contact Sales
    </Button>
  );
};

export default ContactSalesBtn;
