import React from "react";

import { PaymentDetailsProps } from "@/types";

const receipt = ({
  amount,
  currency,
  tx_ref,
  date,
  status,
}: PaymentDetailsProps) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-900">Payment Receipt</h2>
        <p className="text-gray-700 mt-2">Transaction Reference: {tx_ref}</p>
        <p className="text-gray-700 mt-2">
          Amount: {amount} {currency}
        </p>
        <p className="text-gray-700 mt-2">Status: {status}</p>
        <p className="text-gray-700 mt-2">Date: {date}</p>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <button className="text-blue-500 hover:text-blue-700 font-semibold">
          Download Receipt
        </button>
      </div>
    </div>
  );
};

export default receipt;
