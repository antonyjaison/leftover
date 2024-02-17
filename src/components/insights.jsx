import React from "react";
import axios from "axios";
import Image from "next/image";

const Insights = async () => {
  const api = process.env.GEMINI_API;

  console.log(api + "/get_insights");

  const res = await axios.post(api + "/get_insights", {
    uid:"65cf8550092ab59d821d880c"
  });
  
  console.log(res);

  return (
    <div>
      <Image
        src="/images/insight.png"
        width={280}
        height={165}
        alt="Insights"
      />
    </div>
  );
};

export default Insights;
