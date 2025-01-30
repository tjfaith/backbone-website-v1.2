"use client";

import { BlogServices } from "@/app/api";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";


function useSubscribe() {
  const [email, setEmail] = useState("");
  const { mutateAsync: subscribe, isPending: subLoading } =
    BlogServices().useBlogSubscriber();
  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const response = await subscribe({ email });

      toast.success(
        // response.data.message || "Subscription created sucessfully",
        "Subscription created sucessfully",
      );
      setEmail("");
    } catch (error: any) {
      toast.error(
        error.response.data.message || "Oops! an error occurred, try again",
        { duration: 6000 },
      );
    }
  };

  return { handleSubscribe, setEmail, email, subLoading };
}

export default useSubscribe;
