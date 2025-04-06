import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ThankYouEmailProps {
  name: string;
  email?: string;
  message: string;
}

export const ThankYouEmail = ({
  name,
  message,
}: ThankYouEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank you for contacting me, {name}!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={banner}>
          <Heading style={greeting}>Thank You!</Heading>
          <Text style={subHeading}>I appreciate you reaching out</Text>
        </Section>
        
        <Section style={content}>
          <Text style={messageStyle}>
            Dear {name},
          </Text>
          
          <Text style={messageStyle}>
            Thank you for taking the time to contact me through my portfolio website. I have received your message and will get back to you as soon as possible.
          </Text>

          <Section style={messageReceipt}>
            <Text style={receiptLabel}>Your message:</Text>
            <Text style={receiptText}>{message}</Text>
          </Section>
          
          <Text style={messageStyle}>
            I typically respond within 24-48 hours. If your matter is urgent, you can reach me directly through any of the social media platforms mentioned in my portfolio.
          </Text>

          <Hr style={divider} />
          
          <Text style={signatureText}>
            Best regards,
          </Text>
          <Text style={signatureName}>
            Htet Aung Khant
          </Text>
          {/* <Text style={signatureText}>
            +66 81 553 7643, +95 9 798 922 327
          </Text> */}
        </Section>

        <Section style={footer}>
          <Text style={footerText}>
            This is an automated response to your message sent through my portfolio website.
            Please do not reply to this email.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f8fafc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
  width: "100%",
};

const banner = {
  backgroundColor: "#4f46e5",
  borderRadius: "6px 6px 0 0",
  padding: "40px 48px",
  textAlign: "center" as const,
};

const greeting = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0 0 12px",
  textAlign: "center" as const,
};

const subHeading = {
  color: "#e0e7ff",
  fontSize: "18px",
  margin: "0",
  textAlign: "center" as const,
};

const content = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "0 0 6px 6px",
  padding: "40px 48px",
  marginBottom: "24px",
};

const messageStyle = {
  color: "#334155",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 24px",
};

const messageReceipt = {
  backgroundColor: "#f1f5f9",
  borderRadius: "6px",
  padding: "16px",
  margin: "32px 0",
};

const receiptLabel = {
  color: "#64748b",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const receiptText = {
  color: "#334155",
  fontSize: "15px",
  lineHeight: "1.5",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const divider = {
  borderTop: "1px solid #e2e8f0",
  margin: "32px 0",
};

const signatureText = {
  color: "#334155",
  fontSize: "16px",
  margin: "0 0 8px",
};

const signatureName = {
  color: "#0f172a",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0",
};

const footer = {
  textAlign: "center" as const,
  padding: "0 24px",
};

const footerText = {
  color: "#64748b",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0",
};

export default ThankYouEmail;