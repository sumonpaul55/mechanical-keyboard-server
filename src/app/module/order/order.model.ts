import mongoose, { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    phone: { type: Number, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    paymentMethod: { type: String, required: true, trim: true },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId },
        ref: "Product",
        required: true,
        min: 1,
      },
    ],
  },
  { timestamps: true }
);

export const Order = model<TOrder>("order", orderSchema);
