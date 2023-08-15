"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.addStudent = exports.userLogin = exports.registerAdmin = exports.RegisterUser = void 0;
const authSchema_1 = require("../models/authSchema");
const helpers_1 = require("../helpers");
const authMiddleware_1 = require("../middleware/authMiddleware");
const RegisterUser = async (req, res) => {
    try {
        const { name, email, password, regNumber } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send("Invalid credentials");
        }
        const existingUser = await (0, authSchema_1.getUsersByMail)(email);
        if (existingUser) {
            return res.status(400).send("User already exists");
        }
        const salt = (0, helpers_1.random)();
        const token = (0, authMiddleware_1.verify)(email);
        const user = await (0, authSchema_1.createUserOrAdmin)({
            name,
            regNumber,
            email,
            authentication: {
                password: (0, helpers_1.authentication)(salt, password),
                salt,
                accessToken: token,
            },
        }, false);
        return res.status(200).json(user).end();
    }
    catch (err) {
        return res.sendStatus(400);
    }
};
exports.RegisterUser = RegisterUser;
const registerAdmin = async (req, res) => {
    try {
        const { name, email, password, regNumber } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send("Invalid credentials");
        }
        const existingUser = await (0, authSchema_1.getUsersByMail)(email);
        if (existingUser) {
            return res.status(400).send("User already exists");
        }
        const salt = (0, helpers_1.random)();
        const token = (0, authMiddleware_1.verify)(email);
        const admin = await (0, authSchema_1.createUserOrAdmin)({
            name,
            email,
            regNumber,
            authentication: {
                password: (0, helpers_1.authentication)(salt, password),
                salt,
                accessToken: token,
            },
            is_admin: true,
        }, false);
        return res.status(200).json(admin).end();
    }
    catch (err) {
        return res.sendStatus(400);
    }
};
exports.registerAdmin = registerAdmin;
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("Invalid email or password");
        }
        const user = await (0, authSchema_1.getUsersByMail)(email).select("+authentication.salt +authentication.password +is_admin +is_active");
        if (!user)
            return res.status(400).send("Invalid email or password");
        let hashedPassword = (0, helpers_1.authentication)(user.authentication.salt, password);
        if (user.authentication.password !== hashedPassword)
            return res.status(400).send("Invalid Password");
        const salt = (0, helpers_1.random)();
        user.authentication.sessionToken = (0, helpers_1.authentication)(salt, user._id.toString());
        const token = (0, authMiddleware_1.verify)(email);
        user.authentication.accessToken = token;
        await user.save();
        res.cookie(process.env.COOKIE_SECRET_KEY, user.authentication.sessionToken, { domain: "localhost", path: "/" });
        return res.status(200).json(user).end();
    }
    catch (err) {
        res.status(400);
    }
};
exports.userLogin = userLogin;
const addStudent = async (req, res) => {
    const { email, regNumber, name, password } = req.body;
    if (!email || !regNumber || !name) {
        let result = {
            error: "true",
            value: "Invalid email or registration",
        };
        return res.status(400).send(result);
    }
    try {
        const salt = (0, helpers_1.random)();
        const user = await (0, authSchema_1.getUsersByMail)(email);
        if (user)
            return res.status(400).send("User already exists");
        const checkRegNo = await (0, authSchema_1.getUserByRegNumber)(regNumber);
        if (checkRegNo)
            return res.status(400).send("RegNo already exists");
        const student = (0, authSchema_1.createStudent)({
            name,
            email,
            regNumber,
            authentication: {
                password: (0, helpers_1.authentication)(salt, password),
                salt,
            }
        });
        return res.status(200).send("created successfully");
    }
    catch (err) {
        console.log(err);
    }
};
exports.addStudent = addStudent;
const resetPassword = async (req, res) => {
    const { email, password } = req.body;
    const { id } = req.params;
    const user = await (0, authSchema_1.getUsersById)(id).select("+authentication.salt +authentication.password");
    let result;
    if (!email || !password) {
        let result = {
            error: true,
            message: "Invalid Credentials",
        };
        return res.status(401).send(result);
    }
    if (!user) {
        let result = {
            error: true,
            message: "User not found.",
        };
        return res.status(400).json(result);
    }
    try {
        const salt = (0, helpers_1.random)();
        await authSchema_1.UserModel.findByIdAndUpdate({ _id: id }, {
            password: (0, helpers_1.authentication)(salt, password),
        });
        return res.send("done");
    }
    catch (err) {
        console.log(err);
    }
};
exports.resetPassword = resetPassword;
//# sourceMappingURL=userAuth.js.map