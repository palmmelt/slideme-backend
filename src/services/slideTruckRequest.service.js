export const createRequest = async ({
  customerId,
  vehicleId,
  driverId,
  status,
  price,
  note,
  image,
  latitude,
  longitude,
}) => {
  return await prisma.slideRequest.create({
    data: {
      customerId,
      vehicleId,
      driverId,
      status,
      price,
      note,
      image,
      latitude,
      longitude,
      requestTime: new Date(),
      status: "pending",
    },
  });
};

export const getUserRequests = async (customerId) => {
  return await prisma.slideRequest.findMany({ where: { customerId } });
};

export const getRequestById = async (id) => {
  return await prisma.slideRequest.findUnique({ where: { id } });
};

export const cancelRequest = async (id) => {
  return await prisma.slideRequest.update({
    where: { id },
    data: { status: "cancelled" },
  });
};

export const updateRequestStatus = async (id, status) => {
  return await prisma.slideRequest.update({
    where: { id },
    data: { status },
  });
};
