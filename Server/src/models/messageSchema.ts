import mongoose from "mongoose";

type leaveType = {
  name: string;
  email: string;
  leave: string;
  status: string;
};

type genMessage = {
  announcement: string;
};

export const leaveSchema = new mongoose.Schema<leaveType>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  leave: { type: String, required: true, minLength: 12 },
  status: { type: String, default: "pending" },
});
export const LeaveModel = mongoose.model("leaveSchema", leaveSchema);

export const genMessageSchema = new mongoose.Schema<genMessage>({
  announcement: { type: String, required: true },
});

export const GenMessageModel = mongoose.model(
  "genMessageSchema",
  genMessageSchema
);

export const createMessage = (value: Record<string, any>) =>
  new GenMessageModel(value).save().then((message) => message.toObject());

export const updateLeaveStatus = (email: string, status: string) => {
  LeaveModel.findOneAndUpdate({ email, status });
};
export const deleteUserById = (email: string) =>
  LeaveModel.findOneAndDelete({ email: email });
export const leaveApplication = (values: Record<string, any>) =>
  new LeaveModel(values).save().then((message) => message.toObject());
export const getMessageById = (id: string) => LeaveModel.findById(id);
export const deleteMessageById = (id: string) =>
  LeaveModel.findOneAndDelete({ _id: id });
export const getMessage = (email: string) => LeaveModel.find({ email: email });
