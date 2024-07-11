// export type TProducts = {
//   image: string;
//   name: string;
//   brand: string;
//   quantity: number;
//   price: number;
//   rating: number;
//   description: string;
//   delete: boolean;
// };

import { z } from "zod";
import { productValidation } from "./products.validation";

export type TProducts = z.infer<typeof productValidation.addProductValidationSchema>;
