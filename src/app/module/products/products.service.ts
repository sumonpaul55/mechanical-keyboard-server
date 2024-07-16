import QueryBuilder from "../../builder/QueryBuilder";
import { searchAbleField } from "../../builder/searchAblefield";
import { TProducts } from "./products.interface";
import { Products } from "./products.model";

const addProductDb = async (payLoad: TProducts) => {
  // isExist product
  const isExistProduct = await Products.findOne({ name: payLoad.name });
  if (isExistProduct) {
    const result = await Products.findOneAndUpdate({ name: payLoad.name }, { $inc: { quantity: payLoad.quantity } }, { new: true });
    return result;
  }
  const result = await Products.create(payLoad);
  return result;
};

const getAllProductFromDb = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Products.find(), query).search(searchAbleField).fields().paginate().sort();
  const result = await productQuery.modelQuery;

  return result;
};

export const productService = {
  addProductDb,
  getAllProductFromDb,
};
