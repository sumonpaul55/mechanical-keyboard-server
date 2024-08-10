"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    image: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    brand: { type: String, required: true },
    availableQuantity: { type: Number, required: true },
    price: { type: Number, required: true, trim: true },
    rating: { type: Number, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    delete: { type: Boolean, default: false },
}, {
    timestamps: true,
});
exports.Products = (0, mongoose_1.model)("Products", productSchema);
