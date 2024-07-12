import { z } from "zod";

const addProductValidationSchema = z.object({
  image: z.string().url(), // Assuming the image is a URL
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  quantity: z.number().int().nonnegative("Quantity must be a non-negative integer"),
  price: z.number().nonnegative("Price must be a non-negative number"),
  rating: z.number().min(0).max(5, "Rating must be between 0 and 5"),
  description: z.string().min(1, "Description is required"),
  delete: z.boolean().optional(),
});

export const productValidation = {
  addProductValidationSchema,
};
