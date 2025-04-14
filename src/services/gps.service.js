export const getCurrentDriverLocation = async ({ id, uid }) => {
    const data = await prisma.slideRequest.findFirst({
      where: {
        id,
        OR: [{ driverId: uid }, { customerId: uid }],
      },
      orderBy: { requestTime: "desc" },
      select: {
        latitude: true,
        longitude: true,
        driver: {
          select: {
            latitude: true,
            longitude: true,
          },
        },
        customer: {
          select: {
            latitude: true,
            longitude: true,
          },
        },
      },
    });
  
    if (!data) {
      throw new Error("Request not found or unauthorized");
    }
  
    return {
      customer: {
        latitude: data.customer?.latitude ?? null,
        longitude: data.customer?.longitude ?? null,
      },
      driver: {
        latitude: data.driver?.latitude ?? null,
        longitude: data.driver?.longitude ?? null,
      },
      endpoint: {
        latitude: data.latitude,
        longitude: data.longitude,
      },
    };
  };
  