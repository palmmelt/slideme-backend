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

export const getRequestById = async ({ id, customerId }) => {
  return await prisma.slideRequest.findUnique({ where: { id, customerId } });
};

export const cancelRequest = async (id) => {
  try {
    const updateRequest = await prisma.slideRequest.update({
      where: { id },
      data: { status: "cancelled" },
    });

    return {
      status: true,
      message: `canceled request id : ${updateRequest.id}`,
    };
  } catch (error) {
    return {
      status: false,
      message: `can't cancel request id: ${id}`,
      error: error.message || error,
    };
  }
};

export const updateRequestStatus = async (id, status) => {
  try {
    const updateRequest = await prisma.slideRequest.update({
      where: { id },
      data: { status },
    });

    return {
      status: true,
      message: `updated request id : ${updateRequest.id}`,
      data: updateRequest,
    };
  } catch (error) {
    return {
      status: false,
      message: `can't update request id : ${id}`,
      data: null,
      error: error.message || error,
    };
  }
};
