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

  const useUpdateCountry = () => {
    return useMutation({
      mutationKey: ["update-country"],
      mutationFn: async (countryCode: string) => {
        return api.post("/geo", {
          country: countryCode,
        });
      },
    });
  };

  return {
    useSendMessage,
    useUpdateCountry,
  };
}
export default ContactServices;
