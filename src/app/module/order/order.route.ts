import { Router } from "express";
import validateRequerst from "../../middleware/validateRequest";
import { orderValidation } from "./order.validation";
import { orderController } from "./order.controller";

const router = Router();
router.post("/", validateRequerst(orderValidation.addOrderValidationSchema), orderController.addOrder);

export const orderRoute = router;
