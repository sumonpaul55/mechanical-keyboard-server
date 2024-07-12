import { Router } from "express";
import { productsController } from "./products.controller";
import validateRequerst from "../../middleware/validateRequest";
import { productValidation } from "./products.validation";

const router = Router();

router.post("/", validateRequerst(productValidation.addProductValidationSchema), productsController.addProducts);

// router.put("/id", productsController.updateProducts);

export const productsRoutes = router;
