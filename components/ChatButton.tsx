"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ChatButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_SALES_WHATSAPP_CONTACT;
  const encodedMessage = encodeURIComponent(
    "👋Hello! I need more info about Backbone https://mybackbone.io",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      rel="noopener noreferrer"
      target="_blank"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="fixed bg-background/80 h-10 rounded-3xl m-3 bottom-0 right-0 z-50 inline-flex items-center gap-2 px-2 animate__delay-2s animate__animated animate__bounceIn shadow-xl cursor-pointer">
        <div className="text-sm text-primary flex items-center gap-2 font-medium">
          <Icon icon="material-symbols:double-arrow-rounded" />
          <span>Chat with us!</span>
        </div>
        <div className="text-5xl p-1 rounded-full bg-background shadow-xl">
          <Icon icon="logos:whatsapp-icon" />
        </div>
      </div>
    </motion.a>
  );
}
