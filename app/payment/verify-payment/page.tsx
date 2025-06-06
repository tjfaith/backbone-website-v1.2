"use client";
export const dynamic = "force-dynamic";
import React from "react";
import { Card, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

import useVerifyPayment from "./useVerifyPayment";

import {
  FailedPayment,
  SuccessfulPayment,
  CancelledPayment,
  CustomButton,
} from "@/components";
import { Spinner } from "@/public/assets";

const VerifyPayment = () => {
  const { queryParams, updateLoading, theme, isSSR } = useVerifyPayment();

  return (
    <div className=" inline-flex items-center justify-center w-full min-h-screen">
      {updateLoading ? (
        <div className="flex justify-center items-center min-h-screen w-screen">
          <Spinner className="h-20 w-20" color="black" />
        </div>
      ) : (
        <Card className="w-1/3 mx-auto border-2 mt-10" shadow="none">
          {queryParams.status === "successful" && <SuccessfulPayment />}
          {queryParams.status === "cancelled" && <CancelledPayment />}
          {queryParams.status === "failed" && <FailedPayment />}
          <div className="px-5 my-5">
            <Divider />
          </div>
          <CardFooter className="text-center text-xs flex-col space-y-5">
            <div>
              Are you ready to take control of your financial future? Join{" "}
              <Link className="text-primary font-bold text-sm" href="/">
                Backbone
              </Link>{" "}
              today and unlock a world of possibilities.
            </div>

            <CustomButton
              fullWidth
              as={Link}
              href="/"
              variant={theme === "dark" || isSSR ? "flat" : "light"}
            >
              <div className="flex items-center justify-center gap-1">
                <Icon
                  className="text-white text-xl"
                  icon="ri:arrow-right-up-fill"
                />
                <span>Join us now</span>
              </div>
            </CustomButton>

            {/* <Button
              fullWidth
              as={Link}
              className="bg-gradient-to-t from-primary to-gray-700 px-5 text-xs"
              color="primary"
              href="/"
              radius="md"
              startContent={
                <Icon
                  className="text-white text-xl"
                  icon="ri:arrow-right-up-fill"
                />
              }
            >
              Join us now
            </Button> */}
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default VerifyPayment;
