import { optional, z } from "zod";

const addProductValidationSchema = z.object({
  image: z.string().url(), // Assuming the image is a URL
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  availableQuantity: z.number().int().positive("Quantity must be a non-negative integer"),
  price: z.number().nonnegative("Price must be a non-negative number"),
  rating: z.number().min(0).max(5, "Rating must be between 0 and 5"),
  description: z.string().min(1, "Description is required"),
  delete: z.boolean().optional(),
});

const editProductValidationSchema = z.object({
  id: z.string().optional(),
  image: z.string().url().optional(), // Assuming the image is a URL
  name: z.string().min(1, "Name is required").optional(),
  brand: z.string().min(1, "Brand is required").optional(),
  availableQuantity: z.number().int().positive("Quantity must be a non-negative integer").optional(),
  price: z.number().nonnegative("Price must be a non-negative number").optional(),
  rating: z.number().min(0).max(5, "Rating must be between 0 and 5").optional(),
  description: z.string().min(1, "Description is required").optional(),
});
export const productValidation = {
  addProductValidationSchema,
  editProductValidationSchema,
};
