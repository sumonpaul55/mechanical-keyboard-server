import mongoose, { model, Schema } from "mongoose";
import { CartType } from "./cart.interface";

const cartModelSchema = new Schema<CartType>({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
});

export const Cart = model("Cart", cartModelSchema);
