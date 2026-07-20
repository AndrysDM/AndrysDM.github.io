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
  title: "Andrys Domínguez Moreno | Software Developer",
  description:
    "Software developer specialized in React Native, Next.js, TypeScript and Mobile Development. Passionate about building high-quality applications.",
  openGraph: {
    title: "Andrys Domínguez Moreno | Software Developer",
    description:
      "Software developer specialized in React Native, Next.js, TypeScript and Mobile Development.",
    type: "website",
    locale: "en_US",
    siteName: "Andrys Domínguez Moreno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrys Domínguez Moreno | Software Developer",
    description:
      "Software developer specialized in React Native, Next.js, TypeScript and Mobile Development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body>{children}</body>
    </html>
  );
}
