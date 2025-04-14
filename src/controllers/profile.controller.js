import * as profile from "../services/profile.service.js";

export default {
  getMyProfile: async (req, res) => {
    const { uid, urole } = req.user;
    try {
      const data = await profile.getMyProfile({ uid, urole });
      res.status(200).json({
        status: true,
        message: `Success get user profile.`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  updateProfile: async (req, res) => {
    const { uid, urole } = req.user;
    try {
      const data = await profile.updateProfile({
        uid,
        urole,
        data: req.body,
      });
      res.status(200).json({
        status: true,
        message: `Updated profile.`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  getDriverProfile: async (req, res) => {
    try {
      const data = await profile.getDriverProfile({
        driverId: req.params.id,
      });
      res.status(200).json({
        status: true,
        message: `Get driver profile.`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
};
