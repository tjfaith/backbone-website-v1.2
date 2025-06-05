import React from "react";
import { Button } from "@heroui/button";
import { CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";

import { SuccessPaymentIcon } from "@/public/assets";
const SuccessfulPayment = () => {
  return (
    <CardBody className=" flex flex-col items-center gap-4 p-5">
      <Image alt="successful payment" src={SuccessPaymentIcon.src} />
      <div className="text-xl font-bold">Payment Successful</div>
      <div className=" text-center">
        We are delighted to inform you that your recent payment has been
        successfully processed.
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button
          fullWidth
          className=" border-gray-300 border px-5 font-bold"
          color="primary"
          radius="md"
          startContent={<Icon icon="ri:receipt-fill" />}
          variant="bordered"
        >
          Download receipt
        </Button>
        <Button
          isIconOnly
          className=" border-gray-300 border text-xl font-bold"
          radius="full"
          variant="bordered"
        >
          <Icon icon="ri:share-fill" />
        </Button>
      </div>
    </CardBody>
  );
};

export default SuccessfulPayment;
