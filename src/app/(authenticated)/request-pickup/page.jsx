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
    assigned: []
  }
  foodRequests.forEach(request => {
    if (request.status === "closed"){
      groupedRequests.closed.push(request)
    } else if(request.status === "open") {
      groupedRequests.open.push(request)
    } else if(request.status === "assigned") {
      groupedRequests.assigned.push(request)
    }
  })
  return (
    <div className="p-6 pb-12">
      {foodRequests.length === 0 && (
        <p className="text-center">No food requests available</p>
      )}
      {foodRequests.length > 0 && (
        <>
          {groupedRequests.assigned.length > 0 && <h2>Assigned Requests</h2>}
          {groupedRequests.assigned.map((request, index) => (
            <RequestCard
              key={index}
              name={request.foodName}
              quantity={request.quantity}
              pickedBy={request.pickedBy}
              status={request.status}
              date={request.createdAt.toDateString()}
              type={request.type}
            />
          ))}
          {groupedRequests.open.length > 0 && <h2 className="mt-4">Open Requests</h2>}
          {groupedRequests.open.map((request, index) => (
            <RequestCard
              key={index}
              name={request.foodName}
              quantity={request.quantity}
              status={request.status}
              date={request.createdAt.toDateString()}
              type={request.type}
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
              type={request.type}
            />
          ))}
        </>
      )}
      
    </div>
  );
};

export default Page;
