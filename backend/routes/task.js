import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// Create Task
router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// Get All Tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// ✅ Update Task Status (yaha hona chahiye)
router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
});

// ✅ Delete bhi yahi add karo
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send("Task deleted");
});

// ❗ LAST ME EXPORT
export default router;