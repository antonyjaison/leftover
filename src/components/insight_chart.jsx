"use client"

import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const InsightChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date), // X-axis labels
    datasets: [
      {
        label: 'Quantity',
        data: data.map(item => item.quantity), // Y-axis data
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  // Chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Line data={chartData} options={options} />;
};


export default InsightChart