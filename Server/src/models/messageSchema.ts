import mongoose from "mongoose";

type leaveType = {
  leave: string;
};

type genMessage = {
  announcement: string;
};

export const leaveSchema = new mongoose.Schema<leaveType>({
  leave: { type: String, required: true, minLength: 12 },
});
export const LeaveModel = mongoose.model("leaveSchema", leaveSchema);

export const genMessageSchema = new mongoose.Schema<genMessage>({
  announcement: { type: String, required: true },
});

export const GenMessageModel = mongoose.model(
  "genMessageSchema",
  genMessageSchema
);

export const createMessage = (value: Record<string, any>) => {
  new GenMessageModel(value).save().then((message) => message.toObject());
};
export const leaveApplication = (value: Record<string, any>) => {
  new LeaveModel(value).save().then((message) => message.toObject());
};
