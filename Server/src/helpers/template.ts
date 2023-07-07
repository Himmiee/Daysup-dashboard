const nodemailer = require('nodemailer');
import dotenv from "dotenv";
dotenv.config()

export const emailTemplate = () => {
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
    
    transporter.sendMail(mailOptions, function(error:any, info:any){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}