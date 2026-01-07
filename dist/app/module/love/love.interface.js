"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loveInterface = exports.coupleSchema = void 0;
const zod_1 = require("zod");
exports.coupleSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, "Name is required minimum 3 characters"),
    partnerName: zod_1.z.string().min(3, "Partner name is required minimum 3 characters"),
}).refine((data) => data.name.trim().toLowerCase() !== data.partnerName.trim().toLowerCase(), {
    message: "Name and Partner Name cannot be the same",
    path: ["partnerName"], // error will show on partnerName field
});
exports.loveInterface = { coupleSchema: exports.coupleSchema };
