import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
// import sendEmail from "../utils/sendEmail.js";


dotenv.config({ path: "./config.env" });
const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP details
      auth: {
        user: process.env.ADMIN_EMAIL, // your email
        pass: process.env.ADMIN_EMAIL_PASS, // your email app password
      },
    });

    // Send the email
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Enquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Enquiry sent successfully" });
  } catch (error) {
    console.error("Error sending enquiry:", error);
    res.status(500).json({ message: "Failed to send enquiry" });
  }
});

export default router;
