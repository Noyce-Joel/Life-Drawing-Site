"use server";

import nodemailer from "nodemailer";
import { Readable } from "stream";

export async function sendMail({
  to,
  subject,
  email,
  name,
  body,
  attachment,
}: {
  to: string;
  subject: string;
  email: string;
  name: string;
  body: string;
  attachment?: File;
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
  } catch (err) {
    return;
  }

  try {
    const send = await transporter.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
      attachments: [],
    });
  } catch (err) {}
}
