import { NextResponse } from "next/server"
import { z } from "zod"
import axios from "axios"

const coordSchema = z.object({
    lat: z.number({
        message: "latitude must be a number"
    }).min(-90, {
        message: "latitude must be at least -90"
    }).max(90, {
        message: "latitude must be at most 90"
    }),
    lon: z.number({
        message: "longitude must be a number"
    }).min(-180, {
        message: "longitude must be at least -180"
    }).max(180, {
        message: "longitude must be at most 180"
    })
})

export const POST = async (req) => {
    const data = coordSchema.safeParse(await req.json())
    console.log(data)
    if (!data.success) {
        return NextResponse.json({
            error: data.error.errors[0].message
        }, { status: 400 })
    }

    const url = new URL("https://geocode.maps.co/reverse")
    url.searchParams.append("lat", data.data.lat)
    url.searchParams.append("lon", data.data.lon)
    url.searchParams.append("api_key", process.env.GEOCODING_APIKEY)
    
    const res = await axios.get(url.href)
    console.log(res.data?.display_name)

    return NextResponse.json({
        address: res.data?.display_name,
    })
}