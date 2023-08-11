"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLeave = exports.UpdateLeave = exports.viewAllLeave = exports.viewLeave = exports.leaveNote = exports.announcement = void 0;
const messageSchema_1 = require("../models/messageSchema");
const announcement = async (req, res) => {
    const { announcement } = req.body;
    if (!announcement)
        return res.status(404);
    try {
        const news = (0, messageSchema_1.createMessage)({
            announcement,
        });
        return res.status(200).json(news).end();
    }
    catch (err) {
        res.send(err);
    }
};
exports.announcement = announcement;
const leaveNote = async (req, res) => {
    try {
        const { leave, name, email } = req.body;
        if (!leave || !name || !email)
            return res.send("Invalid Credentials");
        const leaveDetail = await (0, messageSchema_1.leaveApplication)({
            name,
            email,
            leave,
        });
        return res.status(200).json(leaveDetail).end();
    }
    catch (err) {
        res.send(err);
    }
};
exports.leaveNote = leaveNote;
const viewLeave = async (req, res) => {
    try {
        const { email } = req.params;
        const message = await (0, messageSchema_1.getMessage)(email);
        if (!message)
            return res.send("not found");
        return res.send(message);
    }
    catch (err) {
        res.send(err);
    }
};
exports.viewLeave = viewLeave;
const viewAllLeave = async (req, res) => {
    try {
        const messages = await (0, messageSchema_1.leaveList)();
        return res.status(200).json(messages).end();
    }
    catch (err) {
        res.status(400);
    }
};
exports.viewAllLeave = viewAllLeave;
const UpdateLeave = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
        let result = {
            error: true,
            message: "Invalid Credentials",
        };
        res.send(result);
    }
    const message = await (0, messageSchema_1.getMessageById)(id);
    if (!message)
        return res.send("User not found");
    try {
        await messageSchema_1.LeaveModel.findByIdAndUpdate({ _id: id }, { status });
        res.send("done");
    }
    catch (err) {
        console.log(err);
    }
};
exports.UpdateLeave = UpdateLeave;
const deleteLeave = async (req, res) => {
    const { id } = req.params;
    const message = await (0, messageSchema_1.getMessageById)(id);
    if (!message)
        return res.send("User not found");
    try {
        const deleteMessage = await (0, messageSchema_1.deleteMessageById)(id);
        return res.status(200).json(deleteMessage);
    }
    catch (err) {
        return res.status(400);
    }
};
exports.deleteLeave = deleteLeave;
//# sourceMappingURL=messages.js.map