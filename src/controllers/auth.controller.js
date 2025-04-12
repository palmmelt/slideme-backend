import * as authService from "../services/auth.service.js";

export default {
  register: async (req, res) => {
    try {
      const data = await authService.registerUser(req.body);
      res.status(201).json({
        status: true,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const data = await authService.loginUser(req.body);
      res.status(200).json({ status: true, data });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message });
    }
  },
  getProfile: async (req, res) => {
    try {
      const data = await authService.getCurrentUser(req.user);
      res.status(200).json({ status: true, data });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message });
    }
  },
};
