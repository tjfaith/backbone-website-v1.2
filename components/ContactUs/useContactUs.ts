"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

import { ContactUsPayload, E164Number, ErrorResponse } from "@/types";
import { ContactServices } from "@/app/api";

function useContactUs() {
  const { mutateAsync: sendMessage, isPending: loading } =
    ContactServices().useSendMessage();
  const [messageData, setMessageData] = useState<ContactUsPayload>({
    name: "",
    email: "",
    phoneNumber: "" as E164Number | undefined,
    subject: "",
    message: "",
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendMessage(messageData);

      toast.success("Message sent successfully");
    } catch (error: unknown) {
      if ((error as ErrorResponse).response) {
        // const errorMessage = (error as ErrorResponse).response.data.message ?? "Oops! an error occurred, try again";
        const errorMessage = "Oops! an error occurred, try again";

        toast.error(errorMessage, { duration: 6000 });
      } else {
        toast.error("An unexpected error occurred. Please try again.", {
          duration: 6000,
        });
      }
    }
  };

  return { handleSubmit, setMessageData, loading, messageData };
}

export default useContactUs;
