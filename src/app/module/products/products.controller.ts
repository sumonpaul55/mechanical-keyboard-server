import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productService } from "./products.service";

const addProducts = catchAsync(async (req, res) => {
  const result = await productService.addProductDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product Added Successfully",
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
  const result = await productService.getAllProductFromDb(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products Retrive successfully",
    data: result,
  });
});

const getProductByid = catchAsync(async (req, res) => {
  const result = await productService.getProductByid(req.query.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product Retrive successfully",
    data: result,
  });
});

// const updateProducts = catchAsync(async (req, res) => {
//   console.log(req.body);
// });

export const productsController = {
  addProducts,
  getAllProduct,
  getProductByid,
  // updateProducts,
};
