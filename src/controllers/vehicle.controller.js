import * as vihicleService from "../services/vihicle.service";

export default {
  info: async (req, res) => {
    const { uid } = req.user;
    try {
      const data = await vihicleService.info(uid);
      res.status(201).json({
        status: true,
        message:"Get vihicle success",
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message ,data:null});
    }
  },
};
