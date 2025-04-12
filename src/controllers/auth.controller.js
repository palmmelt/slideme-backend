import * as authService from "../services/auth.service.js";

export default {
  register: async (req, res) => {
    try {
      const data = await authService.registerUser(req.body);
      res.status(201).json({
        status: true,
        message: "Success register.",
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null});
    }
  },
  login: async (req, res) => {
    try {
      const data = await authService.loginUser(req.body);
      res.status(200).json({ status: true, message: "Success login.", data });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null});
    }
  },
  getProfile: async (req, res) => {
    const { uid } = req.user;
    try {
      const data = await authService.getCurrentUser({ id: uid });
      res
        .status(200)
        .json({ status: true, message: "Success get profile", data });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null});
    }
  },
};
