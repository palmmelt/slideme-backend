import { Router } from "express";
import auth from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { permissionRole } from "../middlewares/permissionRole.middleware.js";
import vehicleController from "../controllers/vehicle.controller.js";

const router = Router();

// 2.Vehicle Info (ข้อมูลรถของคนขับ) [ driver มีรถ 1 ต่อ 1  ]

// ? -ดูรายละเอียดรถ ( อยู่ในหน้า Profile ของคนขับ )
// TODO : ใช้กับ Driver เท่านั้นจะเป็นการดึงรถของตัวเอง
router.get("/get-vehicle",[authenticate,permissionRole(['driver'])], vehicleController.info);

export { router };
