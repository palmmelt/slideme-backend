import * as gps from "../services/gps.service.js";

export default {
  getCurrentLocationDriver: async (req, res) => {
    const { id } = req.params;
    const { uid } = req.user;
    try {
      const data = await gps.getCurrentDriverLocation({ id,uid });
      res.status(200).json({
        status: true,
        message: `Get current location data slide request id : ${id}`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
};
