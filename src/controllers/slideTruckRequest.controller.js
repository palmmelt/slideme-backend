import * as requestService from "../services/slideTruckRequest.service.js";

export default {
  create: async (req, res) => {
    try {
      const request = await requestService.createRequest({
        ...req.body,
        customerId: req.user.id,
      });
      res.status(201).json(request);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  getAll: async (req, res) => {
    const { id } = req.user;
    try {
      const requests = await requestService.getUserRequests(req.user.id);
      res.json(requests);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const request = await requestService.getRequestById(+id);
      res.json(request);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  cancel: async (req, res) => {
    const { id } = req.params;
    try {
      const updated = await requestService.cancelRequest(+id);
      res.json(updated);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  // ? -อัปเดตสถานะ (ระบบภายใน)
  updateStatus: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const updated = await requestService.updateRequestStatus(
        +id,
        status
      );
      res.json(updated);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
