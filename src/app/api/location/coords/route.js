import { NextResponse } from "next/server"
import { z } from "zod"
import axios from "axios"

const addressSchema = z.object({
    address: z.string("address required").min(8, {
        message: "address must be at least 8 characters long"
    }).max(120, {
        message: "address must be at most 120 characters long"
    })
})

export const POST = async (req) => {
    const data = addressSchema.safeParse(await req.json())
    if (!data.success) {
        return NextResponse.json({
            error: data.error.errors[0].message
        }, { status: 400 })
    }

    const url = new URL("https://geocode.maps.co/search")
    url.searchParams.append("q", data.data.address)
    url.searchParams.append("api_key", process.env.GEOCODING_APIKEY)
    
    console.log(url.href)
    const res = await axios.get(url.href)

    if(res.data?.length === 0) {
        return NextResponse.json({
            error: "No results found, invalid address?"
        }, { status: 404 })
    }
    return NextResponse.json({
        lat: res.data[0].lat,
        lon: res.data[0].lon
    }, { status: 200 })
}