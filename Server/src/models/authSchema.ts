import mongoose from "mongoose";

type authenticationType = {
  password: string;
  salt: string;
  sessionToken: string;
  accessToken: string;
}

type UserModelType = {
  name: string;
  regNumber: string;
  email: string;
  authentication:authenticationType,
  is_admin: boolean;
  is_active: boolean;
}



const UserSchema = new mongoose.Schema<UserModelType>({
  name: { type: String, required: true },
  regNumber: {type: String},
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false, minlength:6 },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
    accessToken: { type: String, select: false},
  },
  is_admin: { type: Boolean, default: false , select: false },
  is_active: { type: Boolean, default: true , select: false },
});

export const UserModel = mongoose.model("UserAuthSchema", UserSchema);
export const getUsers = () => UserModel.find();
export const getUsersById = (id: string) => UserModel.findById(id);
export const getAdmin = (is_admin: boolean) => UserModel.find({ is_admin: true})
export const getUsersByAccessToken = (accessToken: string) => UserModel.findOne({"authentication.accessToken" : accessToken})
export const getUsersBySessionToken = (sessionToken: string) => UserModel.findOne({"authentication.sessionToken" : sessionToken})
export const getUsersByMail = (email: string) => UserModel.findOne({ email });
export const getUserByRegNumber = (regNumber: string) =>
  UserModel.findOne({ regNumber });
export const updatedUser = (email:string, password:string) => {
  UserModel.findOneAndUpdate({ email, password})
}
export const createUserOrAdmin = (values: Record<string, any>, is_admin: boolean) =>
  new UserModel(values,is_admin ).save().then((user) => user.toObject());
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate({ id, values });
export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ _id: id });
