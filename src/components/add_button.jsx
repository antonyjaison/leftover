import React from "react";
import { Plus } from "lucide-react";

const AddButton = () => {
  return (
    <button className=" w-[55px] h-[55px] flex justify-center items-center bg-[#224E38] rounded-md fixed bottom-20 right-4 z-10">
      <Plus size={24} color="#fff" />
    </button>
  );
};

export default AddButton;
