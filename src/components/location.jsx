"use client";

import axios from "axios";
import React, { useState } from "react";
import { useGeolocation } from "@uidotdev/usehooks";

const Location = () => {
  const [address, setAddress] = useState([]);
  const location = useGeolocation();

  const getCurrentLocation = async () => {
    const { latitude, longitude } = location;

    try {
      const res = await axios.post("/api/location/address", {
        lat: latitude,
        lon: longitude,
      });
      setAddress(res.data.address.split(","));
    } catch (error) {
      console.error("Error fetching address:", error.message);
    }
  };

  return (
    <button
      onClick={() => getCurrentLocation()}
      className="flex flex-col justify-center items-center"
    >
      <p className=" text-[#8E8E8E] text-sm">Location</p>
      {address.length > 0 && (
        <span className=" flex">
          <img src="/svg/location.svg" alt="location" />
          <p className="text-[#1A1A1A] text-base">{`${address[1]}, ${address[0]}`}</p>
        </span>
      )}
    </button>
  );
};

export default Location;
