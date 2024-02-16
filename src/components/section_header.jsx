import React from "react";
import { ChevronRight } from "lucide-react";

const SectionHeader = ({ name, isSeeAll }) => {
  return (
    <div className=" flex items-center justify-between">
      <h3 className="text-[#1A1A1A] text-lg font-medium">{name}</h3>
      {isSeeAll && (
        <div className="flex items-center cursor-pointer">
          <p className="text-[#8E8E8E] text-lg">See all</p>
          <ChevronRight color="#8E8E8E" size={20} />
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
