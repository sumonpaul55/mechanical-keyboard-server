import { CartType } from "./cart.interface";
import { Cart } from "./cart.model";

const addCartDb = async (payLoad: CartType) => {
  const result = await Cart.create(payLoad);
  return result;
};

export const cartService = {
  addCartDb,
};
