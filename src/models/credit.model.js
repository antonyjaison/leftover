import { Schema, model, models } from "mongoose"

const CreditSchema = new Schema({
    credit: {
        type: Number,
        default: 0
    },
    userId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
)

const Credit =
    models.Credit || model("Credit", CreditSchema);

export default Credit;