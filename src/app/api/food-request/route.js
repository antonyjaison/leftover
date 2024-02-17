import { auth } from "@/lib/auth";
import { dbConnect } from "@/lib/db";
import { locationCoordSchema, requestSchema } from "@/lib/validation";
import FoodRequest from "@/models/foodrequest.model";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.redirect("/login");
    }
    const data = await req.json();
    const parsedData = requestSchema.safeParse(data);
    if (!parsedData.success) {
        console.log(parsedData.error);
        return NextResponse.json({
            error: parsedData.error.errors[0].message
        }, { status: 400 });
    }


    const parsedCoordinates = locationCoordSchema.safeParse(data.coord);
;

    
    await dbConnect()
    const foodReq = await FoodRequest.create({
        foodName: parsedData.data.foodName,
        type: parsedData.data.type,
        category: parsedData.data.category,
        userId: session.user.id,
        preparedAt: new Date(),
        quantity: parsedData.data.quantity,
        status: "open",
        lat: parsedCoordinates.data.lat,
        lon: parsedCoordinates.data.lon
    });

    return NextResponse.json(foodReq, { status: 201 });
}