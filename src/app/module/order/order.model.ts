import mongoose, { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    address: { type: String, required: true, trim: true },
    paymentMethod: { type: String, required: true, trim: true },
    discountAmount: { type: String },
    products: [
      {
        productId: { type: String, ref: "Products", required: true, min: 1 },
        productQuantity: { type: Number, required: true },
        _id: false,
      },
    ],
    totalAmout: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Order = model<TOrder>("order", orderSchema);
