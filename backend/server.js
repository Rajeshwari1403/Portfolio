require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// Resume download route
app.get("/download-resume", (req, res) => {
  const userIP = req.ip;
  console.log("Resume downloaded by:", userIP);

  sendEmailNotification(userIP);

  const filePath = path.join(__dirname, "public", "resume.pdf");
  res.download(filePath, "Rajeshwari_Resume.pdf");
});

// Email function
const sendEmailNotification = async (userIP) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Resume Downloaded!",
    text: `Someone (IP: ${userIP}) downloaded your resume.`,
  });
};

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
