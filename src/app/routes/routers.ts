import { Router } from "express";
import { productsRoutes } from "../module/products/products.route";
import { orderRoute } from "../module/order/order.route";
import { loveRoute } from "../module/love/love.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/products",
    route: productsRoutes,
  },
  {
    path: "/order",
    route: orderRoute,
  },
  {
    path: "/love",
    route: loveRoute,
  },
];

moduleRoutes.map((items) => router.use(items.path, items.route));

export default router;
