export const createBid = async ({ uid, slideRequestId, price }) => {
    const driver = await prisma.driver.findUnique({
      where: { id: uid },
      include: { slideCarService: true },
    });
    if (!driver) throw new Error("Driver not found");
  
    const checkRequest = await prisma.slideRequest.findFirst({
      where: {
        id: slideRequestId,
        status: "pending", 
      },
    });
  
    if (!checkRequest) throw new Error("Slide request unavailable.");

    // ! หากต้องการอนุญาติให้ driver ส่งได้เพียง 1 request
    // const existingBid = await prisma.bid.findFirst({
    //   where: {
    //     slideRequestId,
    //     driverId: driver.id,
    //   },
    // });
    // if (existingBid) throw new Error("Already placed a bid for this request.");
  
    return await prisma.bid.create({
      data: {
        price,
        isAccepted: false,
        slideRequestId,
        slideCarServiceId: driver.slideCarServiceId,
      },
    });
  };
  

export const acceptBid = async ({ bidId }) => {
  const bid = await prisma.bid.update({
    where: { id: bidId },
    data: {
      isAccepted: true,
      acceptedTime: new Date(),
    },
    select: {
      slideRequestId: true,
    },
  });

  return await prisma.slideRequest.update({
    where: { id: bid.slideRequestId },
    data: {
      driverId: driver.id,
      vehicleId: driver.vehicleId,
      status: "in_progress",
    },
  });
};

export const updateJobStatus = async ({ slideRequestId, status }) => {
  return prisma.slideRequest.update({
    where: { id: slideRequestId },
    data: { status },
  });
};

export const getJobDetails = async ({ slideRequestId, uid }) => {
  const slideRequest = await prisma.slideRequest.findFirst({
    where: {
      id: slideRequestId,
      OR: [{ driverId: uid }, { customerId: uid }],
    },
    include: {
      bids: true,
      chatMessages: true,
      driver: true,
      customer: true,
      vehicle: true,
    },
  });
  if (!slideRequest) throw new Error(`Can't get job id : ${slideRequestId}`);

  return slideRequest;
};
