import mongoose, { Schema, Document } from "mongoose";

export interface ICouple extends Document {
    name: string;
    partnerName: string;
    percentige: any;
}

const CoupleSchema = new Schema<ICouple>(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        partnerName: {
            type: String,
            required: [true, "Partner name is required"],
            trim: true,
        },
        percentige: {
            type: String,
            trim: true,
        },
    },
    { timestamps: true }
);

// Custom validation: name !== partnerName
CoupleSchema.pre("validate", function (next) {
    if (
        this.name &&
        this.partnerName &&
        this.name.trim().toLowerCase() ===
        this.partnerName.trim().toLowerCase()
    ) {
        this.invalidate(
            "partnerName",
            "Name and Partner Name cannot be the same"
        );
    }
    next();
});

export const loveModel =
    mongoose.models.Couple ||
    mongoose.model<ICouple>("Couple", CoupleSchema);
