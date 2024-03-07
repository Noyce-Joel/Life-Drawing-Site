"use server";

import nodemailer from "nodemailer";

export async function sendMail({
  to,
  name,
  subject,
  email,
  body,
}: {
  to: string;
  name: string;
  email: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    const send = transporter.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    }, (err, info) => {
        if (err) {
            reject(err);
          } else {
            resolve(info);
          }
    }
    );
   
  });
}
