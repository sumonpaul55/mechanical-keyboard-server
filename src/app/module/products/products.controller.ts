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
const editProduct = catchAsync(async (req, res) => {
  const { id, editAbleProduct } = req.body;
  const result = await productService.editProductDb(id, editAbleProduct);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product Updated Successfully",
    data: result,
  });
});
const deleteProduct = catchAsync(async (req, res) => {
  const result = await productService.deleteProductsFromDb(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product Deleted Successfully",
    data: result,
  });
});

export const productsController = {
  addProducts,
  getAllProduct,
  getProductByid,
  editProduct,
  deleteProduct,
  // updateProducts,
};
