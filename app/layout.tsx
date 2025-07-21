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
  title: "How to Handle Loading Screens with Tailwind Spinner in Next.js (App Router)",
  description:
    "Explore insights and best practices for loading dashboards in web applications. Learn about performance, UX, and implementation tips.",
  keywords: [
    "loading dashboard",
    "dashboard performance",
    "web app dashboard",
    "dashboard UX",
    "react dashboard",
    "nextjs dashboard",
    "seo",
  ],
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
