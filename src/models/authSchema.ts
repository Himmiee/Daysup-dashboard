import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  regNumber: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const UserModel = mongoose.model("UserSchema", UserSchema);
export const getUsers = () => UserModel.find();
export const getUsersById = (id: string) => UserModel.findById(id);
export const getUsersByMail = (email: string) => UserModel.findOne({ email });
export const getUserByRegNumber = (regNumber: string) =>
  UserModel.findOne({ regNumber });
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate({ id, values });
export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ _id: id });
