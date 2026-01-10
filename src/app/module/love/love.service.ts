import { calculateLovePercentage } from "../../utils/lovePercentige";
import { Couple } from "./love.interface";
import { loveModel } from "./love.model";

const addCoupleDb = async (payload: Couple) => {
    const name = payload.name.trim();
    const partnerName = payload.partnerName.trim();

    // Check if couple already exists
    const existingCouple = await loveModel.findOne({ name, partnerName });

    let lovePercentage: number;
    if (existingCouple) {
        // ✅ Use old percentage
        lovePercentage = existingCouple.percentige;
    } else {
        // ✅ Calculate new percentage
        lovePercentage = calculateLovePercentage(name, partnerName);
    }

    // ✅ Always create a new record
    const result = await loveModel.create({
        name,
        partnerName,
        percentige: lovePercentage,
    });

    return result;
};

const getallCouplesDb = async () => {
    const result = (await loveModel.find().sort({
        // modified ones first
        updatedAt: -1,
        // fallback for unmodified data (reverse order)
        createdAt: -1,
    }));
    return result;
}

export const loveService = { addCoupleDb, getallCouplesDb };
