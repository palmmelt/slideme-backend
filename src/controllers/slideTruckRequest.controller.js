import * as requestService from "../services/slideTruckRequest.service.js";

export default {
  create: async (req, res) => {
    // {vehicleId,driverId,requestTime,price,note,image,latitude,longitude} = req.body
    const { uid } = req.user;
    try {
      const request = await requestService.createRequest({
        ...req.body,
        customerId: uid,
      });
      res.status(201).json({
        status: true,
        message: "Created slide truck request",
        data: request,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  getAll: async (req, res) => {
    const { uid } = req.user;
    try {
      const requests = await requestService.getUserRequests(uid);
      res.json({
        status: true,
        message: "Success get all user request.",
        data: requests,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const { uid } = req.user;
    try {
      const request = await requestService.getRequestById({
        id,
        customerId: uid,
      });
      res.json({
        status: true,
        message: `Success get user request id : ${id}`,
        data: request,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  cancel: async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await requestService.cancelRequest(id);
      res.json({
        status: updated.status,
        message: updated.message,
        data: null,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
  updateStatus: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const updated = await requestService.updateRequestStatus(id, status);
      res.json({
        status: updated.status,
        message: updated.message,
        data: updated.data,
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err.message, data: null });
    }
  },
};
