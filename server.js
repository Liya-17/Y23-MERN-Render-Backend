import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
