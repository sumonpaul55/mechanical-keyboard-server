import { calculateLovePercentage } from "../../utils/lovePercentige";
import { Couple } from "./love.interface";
import { loveModel } from "./love.model";

const addCoupleDb = async (payload: Couple) => {
    const name = payload.name.trim();
    const partnerName = payload.partnerName.trim();

    const lovePercentage = calculateLovePercentage(name, partnerName);

    const result = await loveModel.findOneAndUpdate(
        { name, partnerName },
        {
            $setOnInsert: {
                name: payload.name,
                partnerName: payload.partnerName,
                percentige: lovePercentage,
            },
        },
        {
            upsert: true,
            new: true, // returns old document if exists, new if inserted
        }
    );
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
