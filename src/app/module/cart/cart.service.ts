import { CartType } from "./cart.interface";
import { Cart } from "./cart.model";

const addCartDb = async (payLoad: CartType) => {
  const isProductExist = await Cart.findOne({ productId: payLoad.productId });
  if (isProductExist) {
    const result = await Cart.findOneAndUpdate(
      { productId: payLoad.productId },
      {
        $inc: { quantity: payLoad.quantity, new: true },
      }
    );
    return result;
  }
  const result = await Cart.create(payLoad);
  return result;
};

export const cartService = {
  addCartDb,
};
