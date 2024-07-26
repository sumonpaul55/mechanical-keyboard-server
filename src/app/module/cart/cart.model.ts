import mongoose, { model, Schema } from "mongoose";
import { CartType } from "./cart.interface";
import { Products } from "../products/products.model";

const cartModelSchema = new Schema<CartType>({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
});

// handle product stock is available
cartModelSchema.pre("save", async function (next) {
  const isProductAvailable = await Products.findOne({ _id: this.productId, quantity: { $gte: 1 } });
  if (!isProductAvailable) {
    throw new Error("This Product is Out of stock");
  }
  next();
});

export const Cart = model("Cart", cartModelSchema);
