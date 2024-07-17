import { Router } from "express";
import { productsController } from "./products.controller";
import validateRequerst from "../../middleware/validateRequest";
import { productValidation } from "./products.validation";

const router = Router();

router.post("/", validateRequerst(productValidation.addProductValidationSchema), productsController.addProducts);

router.get("/", productsController.getAllProduct);

// router.get("/products-fields", productsController.getProductFields);

// router.put("/id", productsController.updateProducts);

export const productsRoutes = router;
