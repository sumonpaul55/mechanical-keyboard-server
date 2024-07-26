import mongoose from "mongoose";
import { z } from "zod";

export const addToCartValidation = z.object({
  productId: z.string().refine((id) => mongoose.Types.ObjectId.isValid(id), {
    message: "Invalid product ID",
  }),
  quantity: z.number().int().min(1, { message: "Quantity must be at least 1" }),
});

export const cartValidation = {
  addToCartValidation,
};
