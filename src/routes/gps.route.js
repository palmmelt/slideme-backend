import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { permissionRole } from "../middlewares/permissionRole.middleware.js";
import gps from "../controllers/gps.controller.js";

const router = Router();

// 6.GPS

// -ดูตำแหน่งปัจจุบันของคนขับ
// TODO : req.params = { id }
// ? id = sliderequest.id
router.get("/get-vehicle/:id",[authenticate], gps.getCurrentLocationDriver);

export { router };
