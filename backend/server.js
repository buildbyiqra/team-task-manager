import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/task.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);


mongoose.connect("mongodb+srv://root:12345@cluster-1.9iccviu.mongodb.net/taskmanager")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});