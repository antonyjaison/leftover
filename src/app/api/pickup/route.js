import { auth } from "@/lib/auth"
import FoodRequest from "@/models/foodrequest.model"
import { NextResponse } from "next/server"
import { z } from "zod"

c

const pickupSchema = z.object({
    requestId: z.string(),
})

export const POST = async (req) => {
    const session = await auth();
    const parsedData = pickupSchema.safeParse(await req.json())
    if (!parsedData.success) {
        return NextResponse.json({ error: "invalid request"}, { status: 400 })
    }
    const { requestId } = parsedData.data
    const request = await FoodRequest.findOne({ _id: requestId })
    if (!request) {
        return NextResponse.json({ error: "request not found"}, { status: 404 })
    }
    if (request.status === "closed") {
        return NextResponse.json({ error: "request already picked"}, { status: 400 })
    }
    request.status = "closed"
    request.pickedBy = session?.user?.id
    await request.save()
    return NextResponse.json({ message: "request picked" })
}