import { jwt } from "../utils/jwt.js";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ status: false, message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const { id, role } = jwt.verify(token);
    req.user = { id, role };
    next();
  } catch (err) {
    return res.status(401).json({status: false, message: "Invalid token" });
  }
};
