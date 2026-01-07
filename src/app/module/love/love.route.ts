import { Router } from "express";
import validateRequerst from "../../middleware/validateRequest";
import { loveControler } from "./love.controller";
import { loveInterface } from "./love.interface";


const router = Router();
router.post("/", validateRequerst(loveInterface.coupleSchema as any), loveControler.addlove);
router.get("/", loveControler.getallcouples);

export const loveRoute = router;
