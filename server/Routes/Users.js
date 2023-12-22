import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../Models/User.js";
import dotenv from "dotenv";
import { resolve } from "path";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envPath = resolve(__dirname, "C:\\Users\\maran\\Downloads\\TasteIT\\.env");
const dotenvConfigResult = dotenv.config({ path: envPath });

if (dotenvConfigResult.error) {
  console.error("Error loading .env file:", dotenvConfigResult.error);
  process.exit(1); 
}

const secretKey = process.env.JWT;
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({
    username: username,
  });
  if (user) {
    return res.send({ message: "User exists,try out a new username" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    username: username,
    password: hashedPassword,
  });
  await newUser.save();
  res.json({ message: "User registered Sucessfully!" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username: username });

  if (!user) {
    return res.json({ message: "User does'nt exist" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.json({ mesage: "User name or password incorrect" });
  }

  const token = jwt.sign({ id: user._id }, secretKey);
  res.json({token,userID:user._id}) 
});

export { router as UserRouter };
