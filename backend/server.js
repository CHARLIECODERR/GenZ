import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import User from "./models/User.js";

dotenv.config();
connectDB(); // or replace with mongoose.connect(process.env.MONGO_URI)

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.post("/create-user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 8000; // choose 5000 if you prefer
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});