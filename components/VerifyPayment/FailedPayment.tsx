import React from "react";
import { CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

import { FailedPaymentIcon } from "@/public/assets";

const FailedPayment = () => {
  return (
    <CardBody className=" flex flex-col items-center gap-4 p-5">
      <Image alt="cancelled payment" src={FailedPaymentIcon.src} />
      <div className="text-xl font-bold">Oops! Payment Failed</div>
      <div className=" text-center">Payment was not successful</div>
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

export default FailedPayment;
