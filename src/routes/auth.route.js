import { Router } from "express";
import auth from "../controllers/auth.controller.js";

const router = Router();

// 1.Auth

// -ลงทะเบียน
// TODO : req.body = { email, password,name,surname,phoneNumber, role }
// ? role = enum{customer,driver}
router.post("/register", auth.register);

// ? -login
// TODO : req.body = { email, password}
router.post("/login", auth.login);

// ? -ดูข้อมูลผู้ใช้ที่ล็อกอิน
// TODO : req.body = { id }
router.post("/get-profile", auth.getProfile);

export { router };
