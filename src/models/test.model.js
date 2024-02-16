import mongoose, { Schema, model, models } from "mongoose"

const TestSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
)

const Test =
  models.Test || model("Test", TestSchema);

export default Test;