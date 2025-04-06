import React from "react";
import { render } from "@react-email/render";
import nodemailer, { Transporter } from "nodemailer";

import ContactFormEmail from "@/components/Common/EmailTemplates/ContactFormEmail";
import ThankYouEmail from "@/components/Common/EmailTemplates/ThankYouEmail";
import { EmailData, EmailType } from "@/types/common";

interface EmailTemplate {
  component: (data: EmailData) => React.ReactElement;
  subject: (data: EmailData) => string;
  recipient: (data: EmailData) => string;
}

export class MailService {
  private smtpTransporter: Transporter;
  private emailTemplates: Record<EmailType, EmailTemplate>;

  constructor() {
    this.smtpTransporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    this.emailTemplates = {
      [EmailType.NOTIFICATION]: {
        component: ContactFormEmail,
        subject: (data) => `Message from ${data.name}`,
        recipient: () => process.env.NODEMAILER_RECEIVER_EMAIL || "htetaungkhant.job@gmail.com"
      },
      [EmailType.THANK_YOU]: {
        component: ThankYouEmail,
        subject: () => "Thank you for contacting me!",
        recipient: (data) => data.email
      }
    };
  }

  private async renderEmailTemplate(type: EmailType, data: EmailData) {
    const template = this.emailTemplates[type];
    return await render(template.component(data));
  }

  private createMailOptions(type: EmailType, data: EmailData, html: string) {
    const template = this.emailTemplates[type];
    return {
      to: template.recipient(data),
      subject: template.subject(data),
      html,
    };
  }

  public async sendMail(data: EmailData, emailTypes: EmailType[]): Promise<void> {
    try {
      const emailPromises = emailTypes.map(async (type) => {
        const html = await this.renderEmailTemplate(type, data);
        const mailOptions = this.createMailOptions(type, data, html);
        return this.smtpTransporter.sendMail(mailOptions);
      });

      await Promise.all(emailPromises);
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Sending email failed!");
    }
  }
}

// Maybe I will reuse this function later
/*
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
*/