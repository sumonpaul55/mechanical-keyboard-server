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
exports.productService = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const searchAblefield_1 = require("../../builder/searchAblefield");
const products_model_1 = require("./products.model");
const addProductDb = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    // isExist product
    const isExistProduct = yield products_model_1.Products.findOne({ name: payLoad.name });
    if (isExistProduct) {
        const result = yield products_model_1.Products.findOneAndUpdate({ name: payLoad.name }, { $inc: { availableQuantity: payLoad.availableQuantity } }, { new: true });
        return result;
    }
    const result = yield products_model_1.Products.create(payLoad);
    return result;
});
const getAllProductFromDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const productQuery = new QueryBuilder_1.default(products_model_1.Products.find({ delete: false }), query)
        .search(searchAblefield_1.searchAbleField)
        .filter()
        .range()
        .brand()
        .fields()
        .paginate()
        .sort();
    const result = yield productQuery.modelQuery;
    const totalDocument = yield products_model_1.Products.countDocuments({ delete: false });
    return { result, totalDocument };
});
const getProductByid = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Products.findById(payload);
    return result;
});
const editProductDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Products.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteProductsFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Products.findByIdAndUpdate(id, { delete: true }, { new: true });
    return result;
});
exports.productService = {
    addProductDb,
    getAllProductFromDb,
    getProductByid,
    editProductDb,
    deleteProductsFromDb,
};
