import { model, Schema } from "mongoose";
import { TProducts } from "./products.interface";

const productSchema: Schema = new Schema<TProducts>(
  {
    image: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    brand: { type: String, required: true },
    availableQuantity: { type: Number, required: true },
    price: { type: Number, required: true, trim: true },
    rating: { type: Number, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    delete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Products = model<TProducts>("Products", productSchema);
