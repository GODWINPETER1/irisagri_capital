import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // 🔥 THIS IS CRITICAL
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
console.log("EMAIL HOST:", process.env.EMAIL_HOST);
console.log("EMAIL PORT:", process.env.EMAIL_PORT);