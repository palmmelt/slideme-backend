import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { permissionRole } from "../middlewares/permissionRole.middleware.js";
import profile from "../controllers/profile.controller.js";

const router = Router();

// 9.Profile

// -ดูโปรไฟล์ตัวเอง
router.get("/get",[authenticate], profile.getMyProfile);

//-อัปเดตโปรไฟล์ตัวเอง
// TODO : req.body = { bidId }
router.post("/update",[authenticate], profile.updateProfile);

//-ดูโปรไฟล์คนขับ
// TODO : req.params = { id }
// ? id = driver.id
router.get("/check-driver/:id",[authenticate], profile.getDriverProfile);

export { router };
