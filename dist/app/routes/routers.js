"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_route_1 = require("../module/products/products.route");
const order_route_1 = require("../module/order/order.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/products",
        route: products_route_1.productsRoutes,
    },
    {
        path: "/order",
        route: order_route_1.orderRoute,
    },
];
moduleRoutes.map((items) => router.use(items.path, items.route));
exports.default = router;
