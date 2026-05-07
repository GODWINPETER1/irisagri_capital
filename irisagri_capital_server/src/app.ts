import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes";
import quoteRoutes from "./routes/quote.routes";

const app = express();

app.use(
  cors({
    origin: [
      "https://irisagri.co.tz",
      "https://www.irisagri.co.tz",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

// routes
app.use("/api", contactRoutes);
app.use("/api", quoteRoutes);

export default app;