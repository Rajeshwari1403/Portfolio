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
app.use("/public", express.static(path.join(__dirname, "public"))); // serve resume

app.get("/download-resume", (req, res) => {
  const filePath = path.join(__dirname, "public", "resume.pdf");

  // Log downloader IP
  const userIP = req.ip;
  console.log("Resume downloaded by:", userIP);
  sendEmailNotification(userIP);

  // Force file download
  res.download(filePath, "Rajeshwari_Resume.pdf", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Error downloading file");
    }
  });
});

// Email notification
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
const distPath = path.join(__dirnameFull, "..", "portfolio", "dist");
app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
