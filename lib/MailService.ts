import nodemailer from "nodemailer";

export async function sendMail({
  fromEmail,
  toEmail,
  subject,
  htmlContent,
}: {
  fromEmail: string;
  toEmail: string;
  subject: string;
  htmlContent: string;
}) {
  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  let mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject,
    html: htmlContent,
  };

  try {
    await smtpTransporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error("Sending email failed!");
  }
}
