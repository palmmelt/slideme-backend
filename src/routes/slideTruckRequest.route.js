import { Router } from "express";
import slideTruckRequest from "../controllers/slideTruckRequest.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

// 3. Slide Truck Request (การเรียกรถสไลด์)

//  - ลูกค้าส่งคำขอเรียกรถ
// TODO : รับค่าจาก req.body: { vehicleId, driverId, requestTime, price, note, image, latitude, longitude }
router.post("/create",[authenticate],slideTruckRequest.create);

//  - ดูคำขอทั้งหมดของผู้ใช้
// TODO : ใช้ customerId จาก token ผ่าน middleware
router.get("/get_all",[authenticate], slideTruckRequest.getAll);

//  - ดูรายละเอียดคำขอ (1 รายการ)
// TODO : รับ req.params {id} ของ table slide_requests, และคืนข้อมูลคำขอรายการนั้น
router.get("/get_one/:id",[authenticate], slideTruckRequest.getOne);

//  - ยกเลิกคำขอ
// TODO : รับ req.params เพื่อระบุคำขอที่จะยกเลิก แล้วอัปเดต status เป็น "cancelled"
router.post("/cancel/:id",[authenticate], slideTruckRequest.cancel);

//  - อัปเดตสถานะคำขอ (ใช้ภายในระบบ)
// TODO : รับ req.params {id} ของ table slide_requests, และรับ req.body เช่น { status } แล้วอัปเดตในฐานข้อมูล
router.post("/update_status/:id",[authenticate], slideTruckRequest.updateStatus);

export { router };
