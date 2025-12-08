"use client";
import React from "react";
import Link from "next/link";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { Icon } from "@iconify/react";

import usePaymentLink from "./usePaymentLink";

import { FlutterWaveLogo, HalfLogo, Spinner } from "@/public/assets";

const PaymentLink = () => {
  const {
    payment_options,
    linkDetails,
    errorResponse,
    linkDetailsLoading,
    paymentLoading,
    loading,
    makePayment,
  } = usePaymentLink();

  return (
    <div className="flex py-16 md:px-0 px-5 justify-center items-center min-h-screen">
      {linkDetailsLoading || paymentLoading || loading ? (
        <Spinner className="h-20 w-20" color="black" />
      ) : (
        <>
          {errorResponse === "" ? (
            <Card
              className=" md:w-8/12 text-sm p-5 bg-white space-y-4 border-2"
              shadow="none"
            >
              <CardHeader className="justify-between items-center py-0 px-4 md:flex-row flex-col gap-3">
                <div className="flex items-center gap-2 ">
                  <Image
                    alt="logo"
                    className="p-2 bg-primary dark:bg-background h-10 w-10"
                    radius="full"
                    src={HalfLogo.src}
                  />
                  <div className="text-primary-600 dark:text-background-500">
                    <div className=" font-semibold">Backbone</div>
                    <div>Payment Gateway</div>
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-primary-600 dark:text-background-500">
                  <div className="font-semibold">
                    {linkDetails?.currency?.code}{" "}
                    {Number(linkDetails?.amount).toLocaleString()}
                  </div>
                  <div>{linkDetails?.user?.email}</div>
                </div>
              </CardHeader>
              <Divider />
              <CardBody className=" flex flex-col justify-between !bg-background-200 border rounded-2xl">
                <div>
                  <div className="text-primary-400 font-semibold">
                    PAYMENT OPTION
                  </div>

                  <div className="mt-4 ">
                    {payment_options.map((link, index) => (
                      <div key={index} className="flex flex-col w-full">
                        <Button
                          fullWidth
                          className={`${
                            link.status !== "Coming soon" &&
                            "bg-white dark:bg-background dark:hover:bg-background-400 transition-all duration-300 ease-in-out"
                          } px-2 py-1  h-auto w-full  items-center flex mb-3`}
                          endContent={
                            link.status == "Coming soon" ? (
                              <div className="flex items-center space-x-2">
                                <Icon
                                  className="text-green-500 text-2xl"
                                  icon="ph:dot-outline-fill"
                                />
                                <span className="text-sm text-black dark:text-white">
                                  Coming soon
                                </span>
                              </div>
                            ) : (
                              <>
                                {!link.currency_type.includes(
                                  linkDetails?.currency?.type,
                                ) && linkDetails?.currency?.name ? (
                                  <div className="flex items-center space-x-2">
                                    <Icon
                                      className="text-red-500 text-2xl"
                                      icon="ph:dot-outline-fill"
                                    />
                                    <span className="text-sm text-red-500 font-bold">
                                      Currency Not Supported
                                    </span>
                                  </div>
                                ) : (
                                  <Icon
                                    className="text-gray-400"
                                    icon="ri:arrow-right-s-fill"
                                  />
                                )}
                              </>
                            )
                          }
                          isDisabled={
                            link.status == "Coming soon" ||
                            !link?.currency_type.includes(
                              linkDetails?.currency?.type,
                            )
                          }
                          radius="sm"
                          startContent={
                            <div className="rounded-full bg-white dark:bg-background p-2 shadow-sm">
                              {link.status === "flutterwave" ? (
                                <Avatar
                                  className="p-1 h-6 w-6"
                                  src={FlutterWaveLogo.src}
                                />
                              ) : (
                                <Icon
                                  className="!dark:text-white text-primary-400 "
                                  icon={link.start_icon}
                                />
                              )}
                            </div>
                          }
                          variant="light"
                          onPress={makePayment}
                        >
                          <div className="w-full justify-start flex text-semibold">
                            {link?.title}
                          </div>
                        </Button>
                        <Divider />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-sm space-y-4 mt-8">
                  <div>Having trouble with transaction ?</div>
                  <Button
                    fullWidth
                    as={Link}
                    className="bg-white dark:bg-background text-primary-600 dark:text-white text-sm"
                    href="/contact-us"
                    radius="sm"
                    startContent={<Icon icon="ri:headphone-line" />}
                    variant="bordered"
                  >
                    Contact Us
                  </Button>
                  <div className="text-primary-400 text-xs">
                    &copy;{new Date().getFullYear()} Backbone
                  </div>
                </div>
              </CardBody>
              <CardFooter className="flex items-center justify-center text-xs">
                <div className="flex items-center space-x-3 rounded-lg border px-2 py-1">
                  <Icon className="text-green-500" icon="ri:lock-fill" />{" "}
                  <div className="text-primary-600 dark:text-background-500">
                    Secured by <span className="text-bold">Flutterwave</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ) : (
            <div className="flex flex-col items-center justify-center ">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-6xl mb-4">🚫</div>
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                  {errorResponse}
                </h1>
                {/* <p className="text-gray-600">The link you followed is not valid. Please check the URL and try again.</p> */}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PaymentLink;
