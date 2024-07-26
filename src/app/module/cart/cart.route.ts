import { Router } from "express";
import { cartValidation } from "./cart.validation";
import validateRequerst from "../../middleware/validateRequest";
import { cartController } from "./cart.controller";

const router = Router();

router.post("/", validateRequerst(cartValidation.addToCartValidation), cartController.addCart);
router.get("/");

export const cartRouter = router;
