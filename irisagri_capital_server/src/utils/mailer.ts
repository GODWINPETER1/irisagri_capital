import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "mail.irisagri.co.tz",
    port: 465,
    secure: true,
    auth: {
        user: process.env
    }
})