export const rateDriver = async ({ driverId, customerId, rating, comment }) => {
  return await prisma.driverRating.upsert({
    where: {
      driverId_customerId: {
        driverId,
        customerId,
      },
    },
    update: {
      rating,
      comment,
      createdAt: new Date(),
    },
    create: {
      driverId,
      customerId,
      rating,
      comment,
    },
  });
};

export const getDriverAverageRating = async ({ id }) => {
  const result = await prisma.driverRating.aggregate({
    where: { driverId:id },
    _avg: { rating: true },
    _count: { rating: true },
  });

  return {
    average: result._avg.rating || 0,
    count: result._count.rating,
  };
};
