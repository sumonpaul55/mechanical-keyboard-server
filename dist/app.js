"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const routers_1 = __importDefault(require("./app/routes/routers"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1", routers_1.default);
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
app.get("/", (req, res) => {
    res.send("Hello world");
});
exports.default = app;
