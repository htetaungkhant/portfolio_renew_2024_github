import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import ContactFormEmail from "@/components/Common/EmailTemplates/ContactFormEmail";
import ThankYouEmail from "@/components/Common/EmailTemplates/ThankYouEmail";

export async function sendMail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  // Render both email templates
  const notificationHtml = await render(
    ContactFormEmail({
      name,
      email,
      message,
    })
  );

  const thankYouHtml = await render(
    ThankYouEmail({
      name,
      email,
      message,
    })
  );

  // Send notification email to admin
  const notificationMailOptions = {
    // from: process.env.NODEMAILER_EMAIL || "job.htetaungkhant@gmail.com",
    to: process.env.NODEMAILER_RECEIVER_EMAIL || "htetaungkhant.job@gmail.com",
    subject: `Message from ${name}`,
    html: notificationHtml,
  };

  // Send thank you email to the sender
  const thankYouMailOptions = {
    // from: process.env.NODEMAILER_EMAIL || "job.htetaungkhant@gmail.com",
    to: email,
    subject: "Thank you for contacting me!",
    html: thankYouHtml,
  };

  try {
    // Send both emails
    await Promise.all([
      smtpTransporter.sendMail(notificationMailOptions),
      smtpTransporter.sendMail(thankYouMailOptions),
    ]);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Sending email failed!");
  }
}
