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

export const cartController = {
  addCart,
};
