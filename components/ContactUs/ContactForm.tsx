"use client";
import { Input, Textarea } from "@heroui/input";
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import { Link } from "@heroui/link";

import useContactUs from "./useContactUs";

import { E164Number } from "@/types";
import { CustomButton } from "@/components";

const ContactForm = () => {
  const { handleSubmit, setMessageData, loading, messageData } = useContactUs();

  return (
    <form
      className="space-y-4 bg-background rounded-xl md:p-8 p-4 xl:max-w-xl max-w-3xl border border-foreground-100"
      data-aos="fade-up"
      onSubmit={handleSubmit}
    >
      <div className=" mb-8">
        <Input
          classNames={{
            base: "mb-4",
            input: "text-base",
            label: "font-medium !text-primary text-sm",
            inputWrapper: "bg-transparent shadow-none focus:bg-transparent ",
          }}
          isRequired={true}
          label="Email Address"
          labelPlacement="outside"
          placeholder="Fill in your email address"
          radius="md"
          type="email"
          validationBehavior="native"
          value={messageData.email}
          variant="bordered"
          onValueChange={(value: string) =>
            setMessageData((prev) => ({
              ...prev,
              email: value,
            }))
          }
        />

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mb-10">
          <Input
            classNames={{
              input: "text-base",
              label: "font-medium !text-primary text-sm",
              inputWrapper: "bg-transparent shadow-none focus:bg-transparent ",
            }}
            isRequired={true}
            label="Your Name"
            labelPlacement="outside"
            placeholder="Fill in your full name"
            radius="md"
            validationBehavior="native"
            value={messageData.name}
            variant="bordered"
            onValueChange={(value: string) =>
              setMessageData((prev) => ({
                ...prev,
                name: value,
              }))
            }
          />

          <div className=" flex-grow md:w-auto w-full ">
            <div className={`font-medium text-primary mb-2 text-sm`}>
              <span>Phone number (Optional)</span>
            </div>
            <PhoneInput
              containerComponentProps={{
                className: `flex pl-3 border-2  rounded-lg box-border w-full  shadow-xs text-sm border-gray-200 dark:border-background-500 dark:hover:border-[#5E5F68] hover:border-[#A1A1AA] shadow-sm rounded-xl`,
              }}
              countryCallingCodeEditable={false}
              countrySelectProps={{
                className: " rounded-lg",
              }}
              defaultCountry="NG"
              flags={flags}
              international={true}
              limitMaxLength={true}
              numberInputProps={{
                className: `w-xs bg-transparent border-l p-2 border-gray-200 dark:border-background-500 dark:hover:border-[#5E5F68] hover:border-[#A1A1AA] focus:outline-none`,
              }}
              rules={{ required: true }}
              value={messageData.phoneNumber}
              onChange={(value: E164Number | undefined) =>
                setMessageData((prev) => ({
                  ...prev,
                  phoneNumber: value,
                }))
              }
            />
          </div>
        </div>
        <Input
          classNames={{
            base: "mb-4",
            input: "text-base",
            label: "font-medium !text-primary text-sm",
            inputWrapper: "bg-transparent shadow-none focus:bg-transparent ",
          }}
          isRequired={true}
          label="Subject"
          labelPlacement="outside"
          placeholder="What is your inquiry about?"
          radius="md"
          validationBehavior="native"
          value={messageData.subject}
          variant="bordered"
          onValueChange={(value: string) =>
            setMessageData((prev) => ({
              ...prev,
              subject: value,
            }))
          }
        />

        <Textarea
          classNames={{
            input: "text-base",
            label: "font-medium !text-primary text-sm",
          }}
          isRequired={true}
          label="How can we help?"
          labelPlacement="outside"
          placeholder="Write your message here"
          radius="md"
          value={messageData.message}
          variant="bordered"
          onValueChange={(value: string) =>
            setMessageData((prev) => ({
              ...prev,
              message: value,
            }))
          }
        />
      </div>
      <CustomButton fullWidth isLoading={loading} type="submit">
        Get Started
      </CustomButton>
      <div className="text-xs text-primary text-center">
        By submitting this, I confirm that I have read and understood the{" "}
        <Link className="text-xs font-medium" href="/privacy">
          {" "}
          Privacy policy
        </Link>
      </div>
    </form>
  );
};

export default ContactForm;
