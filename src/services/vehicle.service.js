export const getVehicle = async (id) => {
    return await prisma.driver.findFirst({
      where: { id },
      select: {
        vehicle: {
          select: {
              
          },
        },
      },
    });
  };
  