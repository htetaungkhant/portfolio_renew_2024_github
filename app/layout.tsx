import type { Metadata } from "next";

import { FontPoppins } from "../assets/fonts/fonts";

import "@/assets/styles/globals.css";
import "@/assets/styles/common.scss";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "@/components/Common/ScrollToTop/ScrollToTop";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Htet Aung Khant | Portfolio",
  description: "This is the portfolio of Htet Aung Khant.",
  keywords: [
    "htetaungkhant",
    "HtetAungKhant",
    "HTETAUNGKHANT",
    "htet aung khant",
    "Htet Aung Khant",
    "HTET AUNG KHANT",
    "Portfolio",
    "portfolio",
  ],
  authors: [
    { name: "htetaungkhant", url: "https://htetaungkhant-portfolio.vercel.app/" },
    { name: "HtetAungKhant", url: "https://htetaungkhant-portfolio.vercel.app/" },
    { name: "HTETAUNGKHANT", url: "https://htetaungkhant-portfolio.vercel.app/" },
    { name: "htet aung khant", url: "https://htetaungkhant-portfolio.vercel.app/" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          FontPoppins.variable
        )}
      >
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
