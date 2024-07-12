import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";

const validateRequerst = (zodSchema: AnyZodObject) => {
  return catchAsync(async (req, res, next) => {
    // validation
    await zodSchema.parseAsync(req.body);
    next();
  });
};
export default validateRequerst;
