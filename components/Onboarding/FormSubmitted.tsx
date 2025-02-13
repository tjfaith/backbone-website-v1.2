import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "@heroui/link";

import { CustomButton } from "@/components";

const FormSubmitted = () => {
  return (
    <div className="bg-background p-6 rounded-xl  w-full">
      <div className="flex flex-col items-center justify-center p-6">
        <Icon className="text-6xl mb-4 text-success" icon="hugeicons:tick-01" />

        <h2 className="text-2xl font-semibold text-gray-800">Success!</h2>
        <p className="text-gray-600 mt-2">
          Your form has been submitted successfully.
        </p>
        <CustomButton as={Link} className="mt-4" href="/">
          Go Back to Home
        </CustomButton>
      </div>
    </div>
  );
};

export default FormSubmitted;
