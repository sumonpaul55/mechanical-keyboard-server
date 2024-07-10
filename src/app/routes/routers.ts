import { Router } from "express";
import { productsRoutes } from "../module/products/products.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/products",
    route: productsRoutes,
  },
];

moduleRoutes.map((items) => router.use(items.path, items.route));

export default router;
