import  {  dbConnect } from "@/lib/db"
import Test from "@/models/test.model"
import { NextResponse } from "next/server"

export const GET = async () => {
    await dbConnect()
    const data = await Test.create({
        name: "antony"
    })
    return NextResponse.json({
        data
    })
}