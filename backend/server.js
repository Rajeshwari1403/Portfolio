require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// =====================
// ✅ Resume Download API
// =====================
app.get("/download-resume", (req, res) => {
  const userIP = req.ip;
  console.log("Resume downloaded by:", userIP);
  sendEmailNotification(userIP);

  const filePath = path.join(__dirname, "public", "resume.pdf");
  res.download(filePath, "Rajeshwari_Resume.pdf", (err) => {
    if (err) console.error("Error sending file:", err);
  });
});

const sendEmailNotification = async (userIP) => {
  try {
    const transporter = nodemailer.createTransport({
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
  } catch (err) {
    console.error("Email error:", err);
  }
};

// ======================
// ✅ Serve Frontend Build
// ======================
const __dirnameFull = path.resolve();
app.use(express.static(path.join(__dirnameFull, "..", "portfolio", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirnameFull, "portfolio", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
