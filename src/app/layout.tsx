import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainNav from "@/components/MainNav/MainNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dawid Femin Portfolio",
  description: "Projekty Dawid Femin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
