"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loveModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const CoupleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    partnerName: {
        type: String,
        required: [true, "Partner name is required"],
        trim: true,
    },
    percentige: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
// Custom validation: name !== partnerName
CoupleSchema.pre("validate", function (next) {
    if (this.name &&
        this.partnerName &&
        this.name.trim().toLowerCase() ===
            this.partnerName.trim().toLowerCase()) {
        this.invalidate("partnerName", "Name and Partner Name cannot be the same");
    }
    next();
});
exports.loveModel = mongoose_1.default.models.Couple ||
    mongoose_1.default.model("Couple", CoupleSchema);
