import React from "react";
import Receipientcard from "./receipient_card";
import FoodRequest from "@/models/foodrequest.model";
import { auth } from "@/lib/auth";
import { dbConnect } from "@/lib/db";

const ReceipientCards = async () => {
  const session = await auth();
  const user = session?.user;
  const uid = user?.id;
  console.log(uid);
  await dbConnect();
  const foodRequests = await FoodRequest.find({ status: "open", userId : {$ne: uid} }).sort({
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
              date={request.createdAt.toDateString()}
              id={request._id.toString()}
              coord={[request.lat, request.lon]}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ReceipientCards;
