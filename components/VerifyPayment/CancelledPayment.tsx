import React from "react";
import { CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

import { CancelledPaymentIcon } from "@/public/assets";

const CancelledPayment = () => {
  return (
    <CardBody className=" flex flex-col items-center gap-4 p-5">
      <Image alt="cancelled payment" src={CancelledPaymentIcon.src} />
      <div className="text-xl font-bold">Payment Cancelled</div>
      <div className=" text-center">
        This transaction was cancelled successfully.
      </div>
      <Button
        fullWidth
        as={Link}
        className=" border-gray-300 border px-5 font-bold"
        color="primary"
        href="/"
        radius="md"
        variant="bordered"
      >
        Home
      </Button>
    </CardBody>
  );
};

export default CancelledPayment;
