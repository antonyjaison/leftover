import React from "react";
import axios from "axios";

const QuoteSection = async () => {
    const api = process.env.GEMINI_API

    const res = await axios.get(api + "/quote")
    const quote = res.data

  return (
    <div
      style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
      className=" w-full rounded-lg p-5 mt-5 flex justify-center items-center min-h-[120px]"
    >
      <h4 className="text-[#1A1A1A] text-lg font-medium">
        {`"${quote}"`}
      </h4>
    </div>
  );
};

export default QuoteSection;
