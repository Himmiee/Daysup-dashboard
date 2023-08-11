"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getAllUsers = void 0;
const authSchema_1 = require("../models/authSchema");
const getAllUsers = async (req, res) => {
    try {
        const users = await (0, authSchema_1.getUsers)();
        return res.status(200).json(users).end();
    }
    catch (err) {
        res.status(400);
    }
};
exports.getAllUsers = getAllUsers;
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await (0, authSchema_1.deleteUserById)(id);
        return res.status(200).json(deleteUser);
    }
    catch (err) {
        return res.status(400);
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map