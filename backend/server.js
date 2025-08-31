const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// 📌 Resume download route
app.get("/download-resume", (req, res) => {
  const userIP = req.ip;
  console.log("Resume downloaded by:", userIP);

  // Send yourself an email notification
  sendEmailNotification(userIP);

  // Send the resume file
  const filePath = path.join(__dirname, "public", "resume.pdf");
  res.download(filePath, "Rajeshwari_Resume.pdf");
});

// 📌 Email function
const sendEmailNotification = async (userIP) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rajeshwari.cmc@gmail.com",  // replace
      pass: "lvsx ibrc rxnu lzha",     // use app password, not Gmail password
    },
  });

  await transporter.sendMail({
    from: "rajeshwari.cmc@gmail.com",
    to: "rajeshwari.cmc@gmail.com",
    subject: "Resume Downloaded!",
    text: `Someone (IP: ${userIP}) downloaded your resume.`,
  });
};

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
