import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-3a0d10ba.vercel.app"),
  title: {
    default: "Ava Patel · Data Analytics Portfolio",
    template: "%s · Ava Patel Analytics",
  },
  description:
    "Portfolio for Ava Patel, a data analyst specializing in experimentation, predictive modeling, and executive-ready analytics programs.",
  keywords: [
    "data analyst",
    "portfolio",
    "analytics",
    "experimentation",
    "business intelligence",
    "data storytelling",
    "predictive modeling",
  ],
  openGraph: {
    title: "Ava Patel · Data Analytics Portfolio",
    description:
      "Driving growth with decision-grade analytics, experimentation, and modern data stacks.",
    url: "https://agentic-3a0d10ba.vercel.app",
    siteName: "Ava Patel Analytics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ava Patel · Data Analytics Portfolio",
    description:
      "Decision-grade insights, experimentation, and analytics engineering for scaling teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
