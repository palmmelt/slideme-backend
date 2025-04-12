
import jsonwebtoken from 'jsonwebtoken';
import { env } from '../config/env.js';

export const jwt = {
    sign: (payload, options = {}) => {
        const token = jsonwebtoken.sign(payload, env.JWT_SECRET, options);
        return token;
    },
    verify: (token) => {
        try {
            const decoded = jsonwebtoken.verify(token, env.JWT_SECRET);
            return decoded;
          } catch (error) {
            if (error instanceof jsonwebtoken.TokenExpiredError) {
              console.error("Token หมดอายุ");
              throw new Error("Token has expired");
            } else if (error instanceof jsonwebtoken.JsonWebTokenError) {
              console.error("Token ไม่ถูกต้อง");
              throw new Error("Invalid token");
            } else {
              console.error("เกิดข้อผิดพลาดในการตรวจสอบ token:", error);
              throw new Error("Token verification failed");
            }
          }
    },
};