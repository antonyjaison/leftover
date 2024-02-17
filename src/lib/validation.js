import { z } from "zod";

export const requestSchema = z.object({
    foodName: z.string({
        required_error: "Food name is required",
    }).min(3, {
        message: "Food name must be at least 3 characters long",
    }).max(50, {
        message: "Food name must be at most 50 characters long",
    }),
    type: z.enum(["veg", "non-veg"], {
        required_error: "Type is required",
    }),
    category: z.string({
        required_error: "Category is required",
    }).min(3, {
        message: "Category must be at least 3 characters long",
    }).max(50, {
        message: "Category must be at most 50 characters long",
    }),
    quantity: z.coerce.number({
        required_error: "Quantity is required",
    }).min(1, {
        message: "Quantity must be at least 1",
    }).max(100, {
        message: "Quantity must be at most 100",
    }),
    location: z.string({
        required_error: "Location is required",
    }).min(3, {
        message: "Location must be at least 3 characters long",
    }).max(150, {
        message: "Location must be at most 150 characters long",
    }),
});

export const locationCoordSchema = z.object({
    lat: z.coerce.number({
        required_error: "Latitude is required",
    }).min(-90, {
        message: "Latitude must be at least -90",
    }).max(90, {
        message: "Latitude must be at most 90",
    }),
    lon: z.coerce.number({
        required_error: "Longitude is required",
    }).min(-180, {
        message: "Longitude must be at least -180",
    }).max(180, {
        message: "Longitude must be at most 180",
    }),
})
