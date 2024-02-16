import  { Schema, model, models } from "mongoose"

const FoodRequestSchema = new Schema({
    foodName: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        required: true,
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
        enum: ["open", "ordered","finished"],
        default: "open"
    },
    foodPic: {
        type: String,
    }
}, {
    timestamps: true
}
)

const FoodRequest =
  models.FoodRequest || model("FoodRequest", FoodRequestSchema);

export default FoodRequest;