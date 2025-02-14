"use client";
import React from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Icon } from "@iconify/react";

import useSubscribe from "./useSubscribe";

const Subscribe = () => {
  const { handleSubscribe, setEmail, email, subLoading } = useSubscribe();

  return (
    <form className="flex items-start gap-2" onSubmit={handleSubscribe}>
      <Input
        isRequired
        classNames={{
          input:
            "text-base  bg-transparent dark:!text-background text-primary focus-within:placeholder:text-primary",
          inputWrapper:
            "dark:bg-primary-900 bg-background  hover:bg-primary-900 dark:focus-within:!bg-primary-900",
          // innerWrapper: "bg-transparent",
          // mainWrapper: "",
        }}
        placeholder="Enter your email"
        startContent={
          <Icon
            className="dark:text-background text-primary text-xl"
            icon="ri:mail-fill"
          />
        }
        type="email"
        validationBehavior="native"
        value={email}
        variant="flat"
        onValueChange={setEmail}
      />
      <Button
        className="bg-white px-8 dark:text-black"
        isLoading={subLoading}
        startContent={
          <div>{!subLoading && <Icon icon="ri:notification-3-fill" />}</div>
        }
        type="submit"
      >
        {!subLoading && "Subscribe"}
      </Button>
    </form>
  );
};

export default Subscribe;
