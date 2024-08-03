import { INTERNAL_SERVER_ERROR } from "http-status";
import { z } from "zod";

const addOrderValidationSchema = z.object({
  name: z.string({ required_error: "Name Is Required" }),
  email: z.string().email("Invalid Email address"),
  address: z.string({ required_error: "Address Is Required" }),
  phone: z.number({ required_error: "Phone Number is required" }),
  paymentMethod: z.string({ required_error: "Payment method Is Required" }),
  products: z.array(
    z.object({
      productId: z.string({ required_error: "product id is required" }),
      quantity: z.number().min(1, "Qunatity is required"),
    })
  ),
});

export const orderValidation = { addOrderValidationSchema };
