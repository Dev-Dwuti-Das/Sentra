import crypto from "crypto";
import { send } from "process";
const nodemailer = require("nodemailer");


async function sendOTP(email) {
  const otp = crypto.randomBytes(3).toString("hex"); 
  console.log(otp);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "devdwuti@gmail.com",
      pass: "fhwx ckgo qdqc kbvf" 
    }
  });

  await transporter.sendMail({
    from: "devdwuti@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}`
  });
}

export default sendOTP;