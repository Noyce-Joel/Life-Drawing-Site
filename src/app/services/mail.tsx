"use server";

import nodemailer from "nodemailer";

export async function sendMail({
  to,
  subject,
  email,
  name,
  body,
}: {
  to: string;
  subject: string;
  email: string,
  name: string,
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
  try {
    const test = await transporter.verify();
    console.log(test);
  } catch (err) {
    console.log(err);
    return;
  }

  try {
    const send = await transporter.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(send);
  } catch (err) {
    console.log(err);
  }
}
