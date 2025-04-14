import * as vehicleService from "../services/vehicle.service.js";

export default {
  info: async (req, res) => {
    const { uid } = req.user;
    try {
      const data = await vehicleService.info(uid);
      res.status(200).json({
        status: true,
        message:"Get vihicle success",
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message ,data:null});
    }
  },
};
