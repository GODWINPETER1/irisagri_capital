import { transporter } from "../config/mailer";

export const sendQuoteEmail = async (data: any) => {
  const {
    name,
    email,
    phone,
    company,
    country,
    product,
    quantity,
    timeline,
    message,
  } = data;

  // EMAIL TO ADMIN
  await transporter.sendMail({
    from: `"Quote Request" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Quote Request",
    html: `
      <h2>New Quote Request</h2>

      <h3>Personal Info</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Company:</b> ${company || "N/A"}</p>

      <h3>Request Details</h3>
      <p><b>Country:</b> ${country}</p>
      <p><b>Product:</b> ${product}</p>
      <p><b>Quantity:</b> ${quantity}</p>
      <p><b>Timeline:</b> ${timeline}</p>

      <h3>Message</h3>
      <p>${message || "N/A"}</p>
    `,
  });

  // OPTIONAL: confirmation email (safe)
  try {
    await transporter.sendMail({
      to: email,
      subject: "Your Quote Request Received",
      html: `<p>Hi ${name}, we received your request and will get back to you soon.</p>`,
    });
  } catch (err) {
    console.warn("User email failed:", err);
  }
};