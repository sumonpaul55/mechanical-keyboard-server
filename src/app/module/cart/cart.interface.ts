import { z } from "zod";
import { addToCartValidation } from "./cart.validation";

export type CartType = z.infer<typeof addToCartValidation>;
