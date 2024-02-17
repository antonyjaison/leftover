import  { Schema, model, models } from "mongoose"

const FoodRequestSchema = new Schema({
    foodName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["veg", "non-veg"],
        default: "veg"
    },
    category: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
    },
    preparedAt: {
        type: Date,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["open", "assigned","closed"],
        default: "open"
    },
    foodPic: {
        type: String,
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
    pickedBy: {
        type: String,
    },
    pickedByUid: {
        type: String,
    }
}, {
    timestamps: true
}
)

const FoodRequest =
  models.FoodRequest || model("FoodRequest", FoodRequestSchema);

export default FoodRequest;