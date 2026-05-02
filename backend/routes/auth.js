import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();


// ✅ SIGNUP
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashed
  });

  res.json(user);
});


// ✅ LOGIN (YEHI WALA CODE TU PUCH RAHA THA)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json("User not found");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json("Wrong password");

  const token = jwt.sign(
    { id: user._id },
    "secret123",
    { expiresIn: "1d" }
  );

  res.json({ token });
});

export default router;