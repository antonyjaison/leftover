import React from "react";
import { RequestCard } from "@/components/request_card";
import { dbConnect } from "@/lib/db";
import FoodRequest from "@/models/foodrequest.model.js";
import { auth } from "@/lib/auth";

const Page = async () => {
  const session = await auth()

  await dbConnect();
  const foodRequests = await FoodRequest.find({
    userId: session?.user?.id
  }).sort({
    createdAt: -1,
  });

  const groupedRequests = {
    closed: [],
    open: [],
  }
  foodRequests.forEach(request => {
    if (request.status === "closed"){
      groupedRequests.closed.push(request)
    } else {
      groupedRequests.open.push(request)
    }
  })
  return (
    <div className="p-6">
      {foodRequests.length === 0 && (
        <p className="text-center">No food requests available</p>
      )}
      {foodRequests.length > 0 && (
        <>
          {groupedRequests.open.length > 0 && <h2>Open Requests</h2>}
          {groupedRequests.open.map((request, index) => (
            <RequestCard
              key={index}
              name={request.foodName}
              quantity={request.quantity}
              status={request.status}
              date={request.createdAt.toDateString()}
            />
          ))}
          {groupedRequests.closed.length > 0 && <h2 className="mt-4">Closed Requests</h2>}
          {groupedRequests.closed.map((request, index) => (
            <RequestCard
              key={index}
              name={request.foodName}
              quantity={request.quantity}
              pickedBy={request.pickedBy}
              status={request.status}
              date={request.createdAt.toDateString()}
            />
          ))}
        </>
      )}
      
    </div>
  );
};

export default Page;
