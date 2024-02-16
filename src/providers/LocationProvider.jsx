"use client";
import { useGeolocation } from "@uidotdev/usehooks";
import { useEffect } from "react";

function LocationProvider({ children }) {
  const location = useGeolocation({
    enableHighAccuracy: true,
  });

  useEffect(() => {
    if (location.error) {
      console.error(location.error);
    }
  }
  , [location.error, location.loading]);
  return children;
}

export default LocationProvider;
