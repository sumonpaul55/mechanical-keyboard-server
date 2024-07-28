import { model, Schema } from "mongoose";
import { TProducts } from "./products.interface";

const productSchema: Schema = new Schema<TProducts>(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    delete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Products = model<TProducts>("Products", productSchema);
