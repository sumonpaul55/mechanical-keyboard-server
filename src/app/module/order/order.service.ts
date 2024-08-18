import { startSession } from "mongoose";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";
import { Products } from "../products/products.model";
import httpStatus from "http-status";
import AppError from "../../error/AppError";

const addOrderDb = async (payload: TOrder) => {
  // reduce qunatity from product after confirm chekcout
  const orderedProduct = payload.products;
  // const session = await startSession();
  const updatePromises = orderedProduct.map(async (product) => {
    //find the produc is exist
    const existProduct = await Products.findById(product.productId);
    //  product exist and have enough quantity
    if (!existProduct || existProduct.availableQuantity < product.productQuantity) {
      throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Product Not available or Insufficient qunatity");
    }
    // reduce qunatity from main produt after confirem
    existProduct.availableQuantity -= product.productQuantity;
    await existProduct.save();
  });
  // ensure all asynchrounus operation completed
  await Promise.all(updatePromises);
  const result = await Order.create(payload);
  return result;
};

export const orderService = { addOrderDb };
