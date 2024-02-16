import React from "react";

const HomeOpenRequests = () => {
  return (
    <div
      style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
      className=" w-full rounded-lg p-5 mt-5 flex justify-center items-center min-h-[120px]"
    >
      <h4 className="text-[#1A1A1A] text-lg font-medium">You don’t have any open requests</h4>
    </div>
  );
};

export default HomeOpenRequests;
