import { calculateLovePercentage } from "../../utils/lovePercentige";
import { Couple } from "./love.interface";
import { loveModel } from "./love.model";

const addCoupleDb = async (payload: Couple) => {

    const lovePercentage = calculateLovePercentage(
        payload.name,
        payload.partnerName
    );

    const result = await loveModel.create({
        ...payload,
        percentige: lovePercentage,
    });

    return result;
};

const getallCouplesDb = async () => {
    const result = (await loveModel.find()).reverse();
    return result;
}

export const loveService = { addCoupleDb, getallCouplesDb };
