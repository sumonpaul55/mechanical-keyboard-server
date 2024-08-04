import { Router } from "express";
import { productsRoutes } from "../module/products/products.route";
import { cartRouter } from "../module/cart/cart.route";
import { orderRoute } from "../module/order/order.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/products",
    route: productsRoutes,
  },
  {
    path: "/cart",
    route: cartRouter,
  },
  {
    path: "/order",
    route: orderRoute,
  },
];

moduleRoutes.map((items) => router.use(items.path, items.route));

export default router;
