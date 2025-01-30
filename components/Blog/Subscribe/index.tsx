"use client";
import React from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import useSubscribe from "./useSubscribe";
import { Icon } from "@iconify/react";

const Subscribe = () => {
  const { handleSubscribe, setEmail, email, subLoading } = useSubscribe();

  return (
    <form className="flex items-start gap-2" onSubmit={handleSubscribe}>
      <Input
        isRequired
        className="text-white"
        classNames={{
          input: "text-base !text-white bg-transparent",
          inputWrapper:
            "bg-primary-900 !text-white hover:bg-primary-900 focus-within:!bg-primary-900",
          innerWrapper: "bg-transparent !text-white",
          mainWrapper: "!text-white",
        }}
        placeholder="Enter your email"
        startContent={
          <Icon className="text-white text-xl" icon="ri:mail-fill" />
        }
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
