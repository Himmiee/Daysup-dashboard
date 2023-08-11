"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessage = exports.deleteMessageById = exports.getMessageById = exports.leaveApplication = exports.leaveList = exports.deleteUserById = exports.updateLeaveStatus = exports.createMessage = exports.GenMessageModel = exports.genMessageSchema = exports.LeaveModel = exports.leaveSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.leaveSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    leave: { type: String, required: true, minLength: 12 },
    status: { type: String, default: "pending" },
});
exports.LeaveModel = mongoose_1.default.model("leaveSchema", exports.leaveSchema);
exports.genMessageSchema = new mongoose_1.default.Schema({
    announcement: { type: String, required: true },
});
exports.GenMessageModel = mongoose_1.default.model("genMessageSchema", exports.genMessageSchema);
const createMessage = (value) => new exports.GenMessageModel(value).save().then((message) => message.toObject());
exports.createMessage = createMessage;
const updateLeaveStatus = (email, status) => {
    exports.LeaveModel.findOneAndUpdate({ email, status });
};
exports.updateLeaveStatus = updateLeaveStatus;
const deleteUserById = (email) => exports.LeaveModel.findOneAndDelete({ email: email });
exports.deleteUserById = deleteUserById;
const leaveList = () => exports.LeaveModel.find();
exports.leaveList = leaveList;
const leaveApplication = (values) => new exports.LeaveModel(values).save().then((message) => message.toObject());
exports.leaveApplication = leaveApplication;
const getMessageById = (id) => exports.LeaveModel.findById(id);
exports.getMessageById = getMessageById;
const deleteMessageById = (id) => exports.LeaveModel.findOneAndDelete({ _id: id });
exports.deleteMessageById = deleteMessageById;
const getMessage = (email) => exports.LeaveModel.find({ email: email });
exports.getMessage = getMessage;
//# sourceMappingURL=messageSchema.js.map