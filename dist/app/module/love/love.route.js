"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loveRoute = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const love_controller_1 = require("./love.controller");
const love_interface_1 = require("./love.interface");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(love_interface_1.loveInterface.coupleSchema), love_controller_1.loveControler.addlove);
router.get("/", love_controller_1.loveControler.getallcouples);
exports.loveRoute = router;
