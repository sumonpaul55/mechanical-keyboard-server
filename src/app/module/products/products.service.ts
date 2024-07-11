import { TProducts } from "./products.interface";
import { Products } from "./products.model";

const addProductDb = async (payLoad: TProducts) => {
  const result = await Products.create(payLoad);
  return result;
};

export const productService = {
  addProductDb,
};
