import { CartType } from "./cart.interface";
import { Cart } from "./cart.model";

const addCartDb = async (payLoad: CartType) => {
  const isProductExist = await Cart.findOne({ productId: payLoad.productId });
  if (isProductExist) {
    const result = await Cart.findOneAndUpdate(
      { productId: payLoad.productId },
      {
        $inc: { availableQuantity: payLoad.availableQuantity, new: true },
      }
    );
    return result;
  }
  const result = await Cart.create(payLoad);
  return result;
};
const getCarts = async () => {
  const result = await Cart.find({}).populate("productId");
  return result;
};
const getCartAmount = async () => {
  const result = await Cart.countDocuments();
  return result;
};
export const cartService = {
  addCartDb,
  getCarts,
  getCartAmount,
};
