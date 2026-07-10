import type { Metadata } from "next";
import { Assistant, Merriweather_Sans, Anonymous_Pro } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const anonymousPro = Anonymous_Pro({
  variable: "--font-anonymous-pro",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Verified Plug (China to Ghana vehicle and goods sourcing)",
  description:
    "Vehicles and general goods, sourced and shipped from China to Ghana. Verified suppliers, transparent pricing, handled end to end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${assistant.variable} ${merriweatherSans.variable} ${anonymousPro.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
