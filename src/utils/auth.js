import bcrypt from "bcrypt";

function comparePassword(raw, hashed) {
  return bcrypt.compare(raw, hashed);
}

export async function login(email, password) {
  const customer = await prisma.customer.findUnique({ where: { email } });
  if (customer && comparePassword(password, customer.password)) {
    return { role: "customer", user: customer };
  }

  const driver = await prisma.driver.findUnique({ where: { email } });
  if (driver && comparePassword(password, driver.password)) {
    return { role: "driver", user: driver };
  }

  return false;
}
