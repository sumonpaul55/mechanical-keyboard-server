import { Router } from "express";
import { productsController } from "./products.controller";

const router = Router();

router.use("/products", productsController.addProducts);

export const productsRoutes = router;
