"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmail = void 0;
const mailer_1 = require("../config/mailer");
const sendContactEmail = async (data) => {
    const { fullName, email, phone, subject, message } = data;
    // email to admin
    await mailer_1.transporter.sendMail({
        from: `"irisagri website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: subject || "New Contact Message",
        html: `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${fullName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `,
    });
    // confirmation email
    await mailer_1.transporter.sendMail({
        to: email,
        subject: "We received your message",
        html: `<p>Hi ${fullName}, we’ll get back to you soon.</p>`,
    });
};
exports.sendContactEmail = sendContactEmail;
