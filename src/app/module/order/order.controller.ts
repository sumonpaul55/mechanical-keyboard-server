import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { orderService } from "./order.service";

const addOrder = catchAsync(async (req, res) => {
  const result = await orderService.addOrderDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Your Order accepted Successfully",
    data: result,
  });
});

export const orderController = { addOrder };
