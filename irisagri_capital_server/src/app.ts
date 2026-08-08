import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes";
import quoteRoutes from "./routes/quote.routes";

const app = express();

const allowedOrigins = [
  "https://irisagri.co.tz",
  "https://www.irisagri.co.tz",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

// routes
app.use("/api", contactRoutes);
app.use("/api", quoteRoutes);

export default app;