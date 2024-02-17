"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import InsightChart from "./insight_chart";

const Insights = ({ uid }) => {
  const [insightData, setInsightData] = useState([]);

  useEffect(() => {
    const getInsights = async () => {
      const api = process.env.NEXT_PUBLIC_GEMINI_API;
      const res = await axios.post(api + "/get_insights", {
        uid: uid,
      });

      setInsightData(res.data);
    };
    getInsights();
  }, []);

  console.log(insightData);

  return (
    <div>
      <InsightChart data={insightData} />
    </div>
  );
};

export default Insights;
