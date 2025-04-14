import job from "../controllers/job.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { permissionRole } from "../middlewares/permissionRole.middleware.js";
import { Router } from "express";

const router = Router();

// 4.Job Bidding / รับงาน / ตกลงราคา

// -คนขับเสนอราคา
// TODO : req.body = { slideRequestId, price }
router.post(
  "/create-bid",
  [authenticate, permissionRole(["driver"])],
  job.createBid
);

// --ลูกค้าเลือก bid ที่ตกลง
// TODO : req.body = { bidId }
router.post(
  "/accept-bid",
  [authenticate, permissionRole(["customer"])],
  job.acceptBid
);

// -อัปเดตสถานะงาน เช่น complete pending
// TODO : req.body = { slideRequestId, status }
router.post("/update-status", [authenticate], job.updateStatus);

// -ดูรายละเอียดงานที่ตกลงแล้ว
// TODO : req.params = { slideRequestId }
router.get("/job-detail/:slideRequestId", [authenticate], job.getJobDetails);

// 8. Job Details / History
//-ดึงงานทั้งหมดของผู้ใช้คนนั้น
router.get("/job-history", [authenticate], job.getJobDetails);

export { router };
