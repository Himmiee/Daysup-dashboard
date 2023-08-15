"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplate = void 0;
const nodemailer = require('nodemailer');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const emailTemplate = () => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'haliyya460@gmail.com',
            pass: process.env.APP_PASS
            // ofsxdgafmeupawaa
        }
    });
    const mailOptions = {
        from: 'haliyya460@gmail.com',
        to: 'aliyyah460@outlook.com',
        subject: 'Nodemailer',
        text: 'Learn about Nodemailer!'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    });
};
exports.emailTemplate = emailTemplate;
//# sourceMappingURL=template.js.map