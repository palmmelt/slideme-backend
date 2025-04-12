import bcrypt from "bcryptjs";
import { prisma } from "../config/prisma.js";
import { jwt } from "../utils/jwt.js";
import { login } from "../utils/auth.js";

export const registerUser = async ({
  email,
  password,
  name,
  surname,
  phoneNumber,
  role,
}) => {
  const existing = await prisma[role].findUnique({ where: { email } });
  if (existing) throw new Error("Email already exists");

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma[role].create({
    data: { email, password: hashed, name, surname, phoneNumber },
  });

  const token = jwt.sign({ id: user.id, role });
  return { token, role, id: user.id };
};

export const loginUser = async ({ email, password }) => {

  const isLogin = login({ email, password });
  if (!isLogin) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user.id, role:isLogin?.role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return { token, role };
};

export const getCurrentUser = async ({ id }) => {
  return (
    (await prisma.customer.findUnique({ where: { id } })) ||
    (await prisma.driver.findUnique({ where: { id } }))
  );
};
