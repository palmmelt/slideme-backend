import ratting from "../controllers/ratting.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { Router } from "express";

const router = Router();

// -ส่งคะแนนรีวิว
// TODO: req.body = { driverId, customerId, rating, comment }
router.post("/rate-driver",[authenticate], ratting.rateDriver);

// -ดูคะแนนเฉลี่ยของผู้ใช้
// TODO: req.params { id }
// ? id = driver.id
router.get("/driver-avg",[authenticate], ratting.getDriverAverageRating);

export { router };
