"use client";
import { useMutation } from "@tanstack/react-query";

import api from "./api.services";

import { ContactUsPayload } from "@/types";

function ContactServices() {
  const useSendMessage = () => {
    return useMutation({
      mutationKey: ["existing-order"],
      mutationFn: async (contactPayload: ContactUsPayload) => {
        return await api.post("/contact-us/send-message", contactPayload);
      },
      retry: false,
    });
  };

  return {
    useSendMessage,
  };
}
export default ContactServices;
