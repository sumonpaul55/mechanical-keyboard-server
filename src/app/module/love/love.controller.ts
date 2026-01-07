import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { loveService } from "./love.service";

const addlove = catchAsync(async (req, res) => {
    if (!req.body.name || !req.body.partnerName) {
        return sendResponse(res, {
            statusCode: httpStatus.BAD_REQUEST,
            success: false,
            message: "Please provide both names",
            data: null,
        });
    }
    const result = await loveService.addCoupleDb(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Calculate successful",
        data: result,
    });
});

const getallcouples = catchAsync(async (req, res) => {
    const result = await loveService.getallCouplesDb();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Couples retrieved successfully",
        data: result,
    });
});

export const loveControler = { addlove, getallcouples };
