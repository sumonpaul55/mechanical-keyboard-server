"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const mongoose_1 = require("mongoose");
const order_model_1 = require("./order.model");
const products_model_1 = require("../products/products.model");
const http_status_1 = __importDefault(require("http-status"));
const addOrderDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // reduce qunatity from product after confirm chekcout
    const orderedProduct = payload.products;
    const session = yield (0, mongoose_1.startSession)();
    try {
        session.startTransaction();
        const updatePromises = orderedProduct.map((product) => __awaiter(void 0, void 0, void 0, function* () {
            //find the produc is exist
            const existProduct = yield products_model_1.Products.findById(product.productId).session(session);
            //  product exist and have enough quantity
            if (!existProduct || existProduct.availableQuantity < product.productQuantity) {
                throw new AppError(http_status_1.default.INTERNAL_SERVER_ERROR, "Product Not available or Insufficient qunatity");
            }
            // reduce qunatity from main produt after confirem
            existProduct.availableQuantity -= product.productQuantity;
            yield existProduct.save({ session });
        }));
        // ensure all asynchrounus operation completed
        yield Promise.all(updatePromises);
        const result = yield order_model_1.Order.create(payload);
        yield session.commitTransaction();
        return result;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new AppError(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server error order not completed");
    }
});
exports.orderService = { addOrderDb };
