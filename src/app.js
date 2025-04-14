import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { env } from "./config/env.js";
import * as routes from "./routes/index.js";

export const app = express();

app.use(
  cors({
    origin: env.clientOrigin,
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", routes.auth);
app.use("/api/slide-truck-rquest", routes.slideTruckRequest);
app.use("/api/gps", routes.gps);
app.use("/api/job", routes.job);
app.use("/api/profile", routes.profile);
app.use("/api/ratting", routes.ratting);
app.use("/api/vehicle", routes.vehicle);

app.get("/", (req, res) => {
  res.json({
    success: true,
    title: "API Slideme",
    version: "1.0.0",
    roundUpdate: "1",
    updatedAt: "18:07 08/04/2025",
  });
});