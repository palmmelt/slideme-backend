export const createRequest = async ({
  customerId,
  note,
  image,
  latitude,
  longitude,
}) => {
  return await prisma.slideRequest.create({
    data: {
      customerId,
      vehicleId: null,
      driverId: null,
      price: null,
      note,
      image,
      latitude,
      longitude,
      requestTime: new Date(),
      status: "pending",
    },
  });
};

export const getUserRequests = async ({uid}) => {
  return await prisma.slideRequest.findMany({ where: { uid } });
};

export const getRequestById = async ({ id, customerId }) => {
  return await prisma.slideRequest.findUnique({ where: { id, customerId } });
};

export const cancelRequest = async ({ id }) => {
  const data = await prisma.slideRequest.update({
    where: { id },
    data: { status: "cancelled" },
  });

  if (!data) throw new Error(`Can't find slide request id : ${id}`);

  return data;
};

export const updateRequestStatus = async ({ id, status }) => {
  const data = await prisma.slideRequest.update({
    where: { id },
    data: { status },
  });

  if (!data) throw new Error(`Can't update slide request id : ${id}`);

  return data;
};
