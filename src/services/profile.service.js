export const ProfileService = {
  getMyProfile: async ({ uid, urole }) => {
    return urole === "customer"
      ? prisma.customer.findUnique({ where: { id: uid } })
      : prisma.driver.findUnique({ where: { id: uid } });
  },

  updateProfile: async ({ uid, urole, data }) => {
    return urole === "customer"
      ? prisma.customer.update({ where: { id: uid }, data })
      : prisma.driver.update({ where: { id: uid }, data });
  },

  getDriverProfile: async ({ driverId }) => {
    return prisma.driver.findUnique({
      where: { id: driverId },
      include: {
        vehicle: true,
        slideCarService: true,
      },
    });
  },
};
