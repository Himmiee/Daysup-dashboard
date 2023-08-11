"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdmin = exports.verifyToken = exports.verify = exports.isAuthenticated = void 0;
const lodash_1 = require("lodash");
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authSchema_1 = require("../models/authSchema");
dotenv_1.default.config();
const isAuthenticated = async (req, res, next) => {
    try {
        const sessionToken = req.cookies[process.env.COOKIE_SECRET_KEY];
        if (!sessionToken) {
            return res.status(404).send("Invalid session token");
        }
        const existingUser = await (0, authSchema_1.getUsersBySessionToken)(sessionToken);
        if (!existingUser) {
            return res.status(403).send("Nil");
        }
        (0, lodash_1.merge)(req, { identity: existingUser });
        return next();
    }
    catch (err) {
        res.status(400);
    }
};
exports.isAuthenticated = isAuthenticated;
const verify = (email) => {
    const token = jsonwebtoken_1.default.sign({ email }, process.env.JWT_SECRET_KEY, {
        expiresIn: "60m",
    });
    return token;
};
exports.verify = verify;
const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    let result;
    if (!authHeader) {
        result = {
            error: true,
            message: "Access token not found",
        };
        return res.send(result);
    }
    const accessToken = req.headers.authorization.split(" ")[1];
    try {
        let user = await (0, authSchema_1.getUsersByAccessToken)(accessToken);
        if (!user) {
            result = {
                error: true,
                message: "Access token not found",
            };
            res.sendStatus(400);
        }
        result = jsonwebtoken_1.default.verify(accessToken, process.env.JWT_SECRET_KEY);
        if (result)
            return res.status(200).send("successful");
        next();
    }
    catch (err) {
        res.send(err);
    }
};
exports.verifyToken = verifyToken;
const verifyAdmin = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    let result;
    if (!authHeader) {
        return res.status(401);
    }
    const accessToken = req.headers.authorization.split(" ")[1];
    try {
        let user = await (0, authSchema_1.getUsersByAccessToken)(accessToken).select("+is_admin");
        if (user.is_admin === false) {
            result = {
                error: true,
                message: "No Permission to access",
            };
            res.send(result);
        }
        else {
            result = jsonwebtoken_1.default.verify(accessToken, process.env.JWT_SECRET_KEY);
            res.status(200);
        }
        next();
    }
    catch (err) {
        res.send("not authorised");
    }
};
exports.verifyAdmin = verifyAdmin;
//# sourceMappingURL=authMiddleware.js.map