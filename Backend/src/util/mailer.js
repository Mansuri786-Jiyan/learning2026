const nodemailer = require("nodemailer");
require('dotenv').config()
const sendMail = async (to, subject, text) => {
  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.Email_User,
        pass: process.env.Email_Pass
      }
    });

    const mailOptions = {
      from: process.env.Email_User,
      to: to,
      subject: subject,
      text: text
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);

  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMail;