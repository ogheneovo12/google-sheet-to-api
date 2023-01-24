import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import APP_CONFIG from "./_config";

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: APP_CONFIG.GMAIL_USER,
    pass: APP_CONFIG.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const emailContent = fs.readFileSync(path.resolve(__dirname, "./email.html"), {
  encoding: "utf8",
});

export async function sendEmail() {
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" ukuanovweogheneovo@gmail.com', // sender address
    to: "ovo@fitted.ng, coder4christ@gmail.com, coder4christ@yahoo.com, 180206089@live.unilag.edu.ng", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: emailContent, // html body
  });
}

export default transporter;
