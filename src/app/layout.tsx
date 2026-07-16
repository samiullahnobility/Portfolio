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
  metadataBase: new URL("https://example.com"),
  title: "Samiullah | Full-Stack .NET, Angular, React & Next.js Developer",
  description: "Portfolio of Samiullah, a full-stack developer specializing in ASP.NET Core, Angular, React, Next.js, TypeScript, SQL Server, PostgreSQL, and practical business software.",
  keywords: [
    "Samiullah",
    "Full-stack developer",
    "ASP.NET Core developer",
    "Angular developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "SQL Server",
    "PostgreSQL",
    "Business software",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Samiullah | Full-Stack .NET, Angular, React & Next.js Developer",
    description: "Premium portfolio for Samiullah, a full-stack developer building APIs, dashboards, database systems, integrations, and practical business applications.",
    url: "https://example.com",
    siteName: "Samiullah.dev",
    images: [{ url: "/profile.jpg", width: 600, height: 600, alt: "Portrait of Samiullah" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samiullah | Full-Stack Developer",
    description: "ASP.NET Core, Angular, React, Next.js, TypeScript, SQL Server, PostgreSQL, and practical business software.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
