import { jwt } from "../utils/jwt.js";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ status: false, message: "Unauthorized" ,data:null});
  }

  const token = authHeader.split(" ")[1];
  try {
    const { uid, urole } = jwt.verify(token);
    req.user = { uid, urole };
    next();
  } catch (err) {
    return res.status(401).json({status: false, message: "Invalid token",data:null });
  }
};
