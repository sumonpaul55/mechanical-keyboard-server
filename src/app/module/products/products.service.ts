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

export const productService = {
  addProductDb,
};
