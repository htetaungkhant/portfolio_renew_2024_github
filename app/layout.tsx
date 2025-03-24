import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";

import { poppins } from "./fonts";

import "./globals.css";
import "primereact/resources/themes/viva-light/theme.css";
import "react-toastify/dist/ReactToastify.css";

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
    { name: "htetaungkhant", url: "https://htetaungkhant.com" },
    { name: "HtetAungKhant", url: "https://htetaungkhant.com" },
    { name: "HTETAUNGKHANT", url: "https://htetaungkhant.com" },
    { name: "htet aung khant", url: "https://htetaungkhant.com" },
    { name: "Htet Aung Khant", url: "https://www.htetaungkhant.com" },
    { name: "HTET AUNG KHANT", url: "https://www.htetaungkhant.com" },
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
        <link
          href="https://db.onlinewebfonts.com/c/157c6cc36dd65b1b2adc9e7f3329c761?family=Amazon+Ember"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          poppins.className
        )}
      >
        <PrimeReactProvider value={{ ripple: true }}>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
