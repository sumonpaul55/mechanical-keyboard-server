import { Router } from "express";
import { cartValidation } from "./cart.validation";
import validateRequerst from "../../middleware/validateRequest";
import { cartController } from "./cart.controller";

const router = Router();

router.post("/", validateRequerst(cartValidation.addToCartValidation), cartController.addCart);
router.get("/", cartController.getAllCarts);
router.get("/total", cartController.getTotalCartAmout);

export const cartRouter = router;
