import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { cn } from "@heroui/theme";
import React from "react";

interface Props {
  className?: string;
  label?: string;
}
const ContactSalesBtn = ({ className, label = "Contact Sales" }: Props) => {
  return (
    <Button
      as={Link}
      className={cn(
        "text-primary-500  bg-background-200 !px-6 !py-3 text-sm font-medium rounded-[10px]",
        className
      )}
      href="/contact-us"
      size="md"
      variant="light"
    >
      {label}
    </Button>
  );
};

export default ContactSalesBtn;
