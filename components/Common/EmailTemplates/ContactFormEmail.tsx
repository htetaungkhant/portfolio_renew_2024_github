import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  message,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Contact Form Message from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logo}>
          <Heading as="h1" style={logoText}>Portfolio Contact</Heading>
        </Section>
        
        <Section style={content}>
          <Heading as="h2" style={title}>
            You have received a new message
          </Heading>
          
          <Section style={infoBox}>
            <Text style={label}>From</Text>
            <Text style={value}>{name}</Text>
            
            <Text style={label}>Email</Text>
            <Link href={`mailto:${email}`} style={emailLink}>
              {email}
            </Link>
          </Section>

          <Hr style={divider} />
          
          <Section style={messageBox}>
            <Text style={label}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Section>

        <Hr style={divider} />
        
        <Section style={footer}>
          <Text style={footerText}>
            This email was sent from your portfolio contact form.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
  width: "100%",
};

const logo = {
  padding: "32px 20px",
  textAlign: "center" as const,
};

const logoText = {
  color: "#0366d6",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "0",
};

const content = {
  backgroundColor: "#ffffff",
  border: "1px solid #e1e4e8",
  borderRadius: "6px",
  padding: "32px",
  marginBottom: "24px",
};

const title = {
  color: "#24292e",
  fontSize: "22px",
  lineHeight: "1.4",
  margin: "0 0 24px",
  textAlign: "center" as const,
};

const infoBox = {
  marginBottom: "24px",
};

const label = {
  color: "#6a737d",
  fontSize: "14px",
  fontWeight: "500",
  marginBottom: "4px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const value = {
  color: "#24292e",
  fontSize: "16px",
  margin: "0 0 16px",
};

const emailLink = {
  color: "#0366d6",
  fontSize: "16px",
  textDecoration: "none",
  margin: "0 0 16px",
  display: "block",
};

const divider = {
  borderTop: "1px solid #e1e4e8",
  margin: "20px 0",
};

const messageBox = {
  backgroundColor: "#f6f8fa",
  borderRadius: "6px",
  padding: "16px",
  marginTop: "24px",
};

const messageText = {
  color: "#24292e",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "8px 0 0",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  textAlign: "center" as const,
  padding: "0 20px",
};

const footerText = {
  color: "#6a737d",
  fontSize: "14px",
  margin: "0",
};

export default ContactFormEmail;