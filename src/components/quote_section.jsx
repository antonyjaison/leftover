import React from "react";

const QuoteSection = () => {
  return (
    <div
      style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
      className=" w-full rounded-lg p-5 mt-5 flex justify-center items-center min-h-[120px]"
    >
      <h4 className="text-[#1A1A1A] text-lg font-medium">
      "One-third of all food produced globally is lost or wasted each year." - Food and Agriculture Organization of the United Nations
      </h4>
    </div>
  );
};

export default QuoteSection;
