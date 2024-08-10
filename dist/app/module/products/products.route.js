"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const products_controller_1 = require("./products.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const products_validation_1 = require("./products.validation");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(products_validation_1.productValidation.addProductValidationSchema), products_controller_1.productsController.addProducts);
router.get("/", products_controller_1.productsController.getAllProduct);
router.get("/getOneProductById", products_controller_1.productsController.getProductByid);
router.put("/edit-product", (0, validateRequest_1.default)(products_validation_1.productValidation.editProductValidationSchema), products_controller_1.productsController.editProduct);
router.delete("/:id", products_controller_1.productsController.deleteProduct);
// router.put("/id", productsController.updateProducts);
exports.productsRoutes = router;
