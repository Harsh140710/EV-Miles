import { env } from "@ev-miles/env/server";
import cors from "cors";
import express from "express";

const app = express();

app.use(
  cors({
    origin: env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  }),
);

app.use(express.json());

// Helth-Check Route
app.get("/", (_req, res) => {
  res.status(200).json({ message: "OK" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
