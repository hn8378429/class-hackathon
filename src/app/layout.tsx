import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header"

import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '700'],
  subsets: ['latin'],
  preload: false,
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}