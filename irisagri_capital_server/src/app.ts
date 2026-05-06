import express from "express";
import cors from "cors"
import contactRoutes from "./routes/contact.routes";
import quoteRoutes from "./routes/quote.routes";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// routes
app.use("/api" , contactRoutes);
app.use("/api" , quoteRoutes);

export default app;