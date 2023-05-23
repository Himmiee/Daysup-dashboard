import crypto from "crypto";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import express  from "express";
import { responseHandler } from "./errorHandler";
import { UserModel } from "../models/authSchema";

dotenv.config();

const key = process.env.SECRET_KEY;

export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (salt: string, password: string) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(key)
    .digest("hex");
};

export const verify = (email: string) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: "30m" });
  return token
};




