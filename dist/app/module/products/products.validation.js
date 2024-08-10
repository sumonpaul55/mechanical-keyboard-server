"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = void 0;
const zod_1 = require("zod");
const addProductValidationSchema = zod_1.z.object({
    image: zod_1.z.string().url(), // Assuming the image is a URL
    name: zod_1.z.string().min(1, "Name is required"),
    brand: zod_1.z.string().min(1, "Brand is required"),
    availableQuantity: zod_1.z.number().int().positive("Quantity must be a non-negative integer"),
    price: zod_1.z.number().nonnegative("Price must be a non-negative number"),
    rating: zod_1.z.number().min(0).max(5, "Rating must be between 0 and 5"),
    description: zod_1.z.string().min(1, "Description is required"),
    delete: zod_1.z.boolean().optional(),
});
const editProductValidationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    image: zod_1.z.string().url().optional(), // Assuming the image is a URL
    name: zod_1.z.string().min(1, "Name is required").optional(),
    brand: zod_1.z.string().min(1, "Brand is required").optional(),
    availableQuantity: zod_1.z.number().int().positive("Quantity must be a non-negative integer").optional(),
    price: zod_1.z.number().nonnegative("Price must be a non-negative number").optional(),
    rating: zod_1.z.number().min(0).max(5, "Rating must be between 0 and 5").optional(),
    description: zod_1.z.string().min(1, "Description is required").optional(),
});
exports.productValidation = {
    addProductValidationSchema,
    editProductValidationSchema,
};
