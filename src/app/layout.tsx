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
  title: "Samiullah | Full-Stack .NET, Angular, React & Next.js Developer",
  description: "Portfolio of Samiullah, a full-stack developer building ASP.NET Core APIs, Angular dashboards, React and Next.js web apps, SQL Server systems, and business software integrations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

