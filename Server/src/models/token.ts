import mongoose from "mongoose";

type tokenType = {
  regNumber: string;
  token: string;
  createdAt: Date;
};

export const tokenSchema = new mongoose.Schema<tokenType>({
  regNumber: { type: String, required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 3600 },
});

export const tokenModel = mongoose.model("Token", tokenSchema);
