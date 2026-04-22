import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", (req, res) => {
  console.log(req.body);
  res.json({ message: "Message received" });
});

app.post("/api/quote", (req, res) => {
  console.log(req.body);
  res.json({ message: "Quote request received" });
});

app.listen(5000, () => console.log("Server running on port 5000"));