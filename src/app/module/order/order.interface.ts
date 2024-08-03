import { z } from "zod";
import { orderValidation } from "./order.validation";

export type TOrder = z.infer<typeof orderValidation.addOrderValidationSchema>;
