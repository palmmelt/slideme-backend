import * as ratting from "../services/ratting.service.js";

export default {
  rateDriver: async (req, res) => {
    try {
      const data = await ratting.rateDriver(req.body);
      res.status(200).json({
        status: true,
        message: `Success`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  getDriverAverageRating: async (req, res) => {
    try {
        const data = await ratting.getDriverAverageRating({id});
        res.status(200).json({
        status: true,
        message: `Success`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
};
