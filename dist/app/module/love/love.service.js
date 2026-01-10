"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loveService = void 0;
const lovePercentige_1 = require("../../utils/lovePercentige");
const love_model_1 = require("./love.model");
const addCoupleDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const lovePercentage = (0, lovePercentige_1.calculateLovePercentage)(payload.name, payload.partnerName);
    const result = yield love_model_1.loveModel.create(Object.assign(Object.assign({}, payload), { percentige: lovePercentage }));
    return result;
});
const getallCouplesDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = (yield love_model_1.loveModel.find()).reverse();
    return result;
});
exports.loveService = { addCoupleDb, getallCouplesDb };
