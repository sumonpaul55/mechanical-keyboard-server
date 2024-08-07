import QueryBuilder from "../../builder/QueryBuilder";
import { searchAbleField } from "../../builder/searchAblefield";
import { TProducts } from "./products.interface";
import { Products } from "./products.model";

const addProductDb = async (payLoad: TProducts) => {
  // isExist product
  const isExistProduct = await Products.findOne({ name: payLoad.name });
  if (isExistProduct) {
    const result = await Products.findOneAndUpdate({ name: payLoad.name }, { $inc: { availableQuantity: payLoad.availableQuantity } }, { new: true });
    return result;
  }
  const result = await Products.create(payLoad);
  return result;
};

const getAllProductFromDb = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Products.find({ delete: false }), query)
    .search(searchAbleField)
    .filter()
    .range()
    .brand()
    .fields()
    .paginate()
    .sort();
  const result = await productQuery.modelQuery;
  const totalDocument = await Products.countDocuments({ delete: false });
  return { result, totalDocument };
};
const getProductByid = async (payload: any) => {
  const result = await Products.findById(payload);
  return result;
};

const editProductDb = async (id: string, payload: TProducts) => {
  const result = await Products.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteProductsFromDb = async (id: string) => {
  const result = await Products.findByIdAndUpdate(id, { delete: true }, { new: true });
  return result;
};
export const productService = {
  addProductDb,
  getAllProductFromDb,
  getProductByid,
  editProductDb,
  deleteProductsFromDb,
};
