import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";

import { CustomButton } from "@/components";

const FormSubmitted = () => {
  return (
    <div className="bg-background p-6 rounded-xl w-full animate__animated animate__fadeIn">
      <div className="flex flex-col items-center justify-center p-6">
        <Icon className="text-6xl mb-4 text-success" icon="hugeicons:tick-01" />

        <h2 className="text-2xl font-semibold text-success">Success!</h2>

        <p className="text-primary-600 mt-2 text-center">
          Your form has been submitted successfully. 🎉
        </p>

        <p className="text-primary-600 text-center">
          Our team is reviewing your submission and will get back to you soon.
        </p>
        <Divider className="my-2" />
        <p className="text-primary-600 text-center mt-2">
          A confirmation email has been sent to your inbox. 📩 Please check your
          email for further details.
        </p>

        <CustomButton
          as={Link}
          className="mt-8 hover:scale-105 transition-transform"
          href="/"
        >
          Go Back to Home
        </CustomButton>
      </div>
    </div>
  );
};

export default FormSubmitted;
