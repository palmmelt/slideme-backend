import * as jobtService from "../services/job.service.js";

export default {
  createBid: async (req, res) => {
    const { uid } = req.user;
    const { slideRequestId, price } = req.body;
    try {
      const data = jobtService.createBid({ uid, slideRequestId, price });
      res.status(201).json({
        status: true,
        message: `Success create bid`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  acceptBid: async (req, res) => {
    try {
      const data = jobtService.acceptBid(req.body);
      res.status(200).json({
        status: true,
        message: `Success accept bid`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  updateStatus: async (req, res) => {
    try {
      const data = jobtService.updateJobStatus(req.body);
      res.status(200).json({
        status: true,
        message: `Bid updated status : ${req.body.status}`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  getJobDetails: async (req, res) => {
    const { slideRequestId } = req.params;
    const { uid } = req.user;
    try {
      const data = jobtService.getJobDetails({ slideRequestId, uid });
      res.status(200).json({
        status: true,
        message: `Success get job id ${slideRequestId}`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  getJobHistory: async (req, res) => {
    const { uid, urole } = req.user;
    try {
      const data = jobtService.getJobDetails({ slideRequestId, uid });
      res.status(200).json({
        status: true,
        message: `Success get job id ${slideRequestId}`,
        data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
};
