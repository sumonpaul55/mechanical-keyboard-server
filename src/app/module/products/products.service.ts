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

const getAllProductFromDb = async (payLoad: { sort?: number; category?: string; limit?: string; search?: string }) => {
  const { category, limit, search } = payLoad;
  let query: { brand?: any; name?: any } = {};

  if (category) {
    {
      query.brand = { $regex: category, $options: "i" };
    }
  }

  if (search) {
    {
      query.name = { $regex: search, $options: "i" };
    }
  }
  let options: number = 10;
  if (limit) {
    options = Number(limit);
  }
  console.log(query);
  const result = await Products.find(query).limit(options);
  return result;
};

export const productService = {
  addProductDb,
  getAllProductFromDb,
};
