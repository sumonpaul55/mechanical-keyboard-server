import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { cartService } from "./cart.service";

const addCart = catchAsync(async (req, res) => {
  const result = await cartService.addCartDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product Added to Cart",
    data: result,
  });
});
const getAllCarts = catchAsync(async (req, res) => {
  const result = cartService.getCarts();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All cart retrived successfully",
    data: result,
  });
});
const getTotalCartAmout = catchAsync(async (req, res) => {
  const result = cartService.getCartAmount();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All cart retrived successfully",
    data: result,
  });
});

export const cartController = {
  addCart,
  getAllCarts,
  getTotalCartAmout,
};
