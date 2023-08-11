"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.createUserOrAdmin = exports.createStudent = exports.updatedUser = exports.getUserByRegNumber = exports.getUsersByMail = exports.getUsersBySessionToken = exports.getUsersByAccessToken = exports.getAdmin = exports.getUsersById = exports.getUsers = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    regNumber: { type: String },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false, minlength: 6 },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
        accessToken: { type: String, select: false },
    },
    is_admin: { type: Boolean, default: false, select: false },
    is_active: { type: Boolean, default: true, select: false },
});
exports.UserModel = mongoose_1.default.model("UserAuthSchema", UserSchema);
const getUsers = () => exports.UserModel.find();
exports.getUsers = getUsers;
const getUsersById = (id) => exports.UserModel.findById(id);
exports.getUsersById = getUsersById;
const getAdmin = (is_admin) => exports.UserModel.find({ is_admin: true });
exports.getAdmin = getAdmin;
const getUsersByAccessToken = (accessToken) => exports.UserModel.findOne({ "authentication.accessToken": accessToken });
exports.getUsersByAccessToken = getUsersByAccessToken;
const getUsersBySessionToken = (sessionToken) => exports.UserModel.findOne({ "authentication.sessionToken": sessionToken });
exports.getUsersBySessionToken = getUsersBySessionToken;
const getUsersByMail = (email) => exports.UserModel.findOne({ email });
exports.getUsersByMail = getUsersByMail;
const getUserByRegNumber = (regNumber) => exports.UserModel.findOne({ regNumber });
exports.getUserByRegNumber = getUserByRegNumber;
const updatedUser = (email, password) => {
    exports.UserModel.findOneAndUpdate({ email, password });
};
exports.updatedUser = updatedUser;
const createStudent = (values) => new exports.UserModel(values).save().then((user) => user.toObject());
exports.createStudent = createStudent;
const createUserOrAdmin = (values, is_admin) => new exports.UserModel(values, is_admin).save().then((user) => user.toObject());
exports.createUserOrAdmin = createUserOrAdmin;
const updateUserById = (id, values) => exports.UserModel.findByIdAndUpdate({ id, values });
exports.updateUserById = updateUserById;
const deleteUserById = (id) => exports.UserModel.findOneAndDelete({ _id: id });
exports.deleteUserById = deleteUserById;
//# sourceMappingURL=authSchema.js.map