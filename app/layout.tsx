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

const siteUrl = "https://berkayalparslan.github.io";

export const metadata: Metadata = {
  title: "Berkay Alparslan | Freelance QA Engineer",
  description:
    "Freelance QA Engineer specializing in test automation, manual testing, and quality assurance. Available for contract work.",
  keywords: [
    "QA Engineer",
    "Freelance",
    "Test Automation",
    "Playwright",
    "Manual Testing",
    "API Testing",
    "Quality Assurance",
  ],
  authors: [{ name: "Berkay Alparslan" }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Berkay Alparslan | Freelance QA Engineer",
    description:
      "Freelance QA Engineer specializing in test automation, manual testing, and quality assurance. Available for contract work.",
    url: siteUrl,
    siteName: "Berkay Alparslan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Berkay Alparslan — Freelance QA Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berkay Alparslan | Freelance QA Engineer",
    description:
      "Freelance QA Engineer specializing in test automation, manual testing, and quality assurance. Available for contract work.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
