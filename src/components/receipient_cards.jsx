import React from "react";
import Receipientcard from "./receipient_card";
import FoodRequest from "@/models/foodrequest.model";
import { dbConnect } from "@/lib/db";

const ReceipientCards = async () => {
  await dbConnect();
  const foodRequests = await FoodRequest.find({ status: "open" }).sort({
    createdAt: -1,
  });

  return (
    <div>
      {foodRequests.length === 0 && (
        <p className="text-center">No food requests available</p>
      )}
      {foodRequests.length > 0 && (
        <>
          {foodRequests.map((request, index) => (
            <Receipientcard
              key={index}
              name={request.foodName}
              quantity={request.quantity}
              status={request.status}
              date={request.preparedAt.toDateString()}
              id={request._id.toString()}
              type={request.type}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ReceipientCards;
