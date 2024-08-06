import { Router } from "express";
import { productsController } from "./products.controller";
import validateRequerst from "../../middleware/validateRequest";
import { productValidation } from "./products.validation";

const router = Router();

router.post("/", validateRequerst(productValidation.addProductValidationSchema), productsController.addProducts);

router.get("/", productsController.getAllProduct);

router.get("/getOneProductById", productsController.getProductByid);
router.put("/edit-product", validateRequerst(productValidation.editProductValidationSchema), productsController.editProduct);
router.delete("/:id", productsController.deleteProduct);

// router.put("/id", productsController.updateProducts);

export const productsRoutes = router;
