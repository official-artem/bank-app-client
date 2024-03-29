import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const inter = Figtree(
  { 
    weight: ['400', '700'],
    style: 'normal',
  }
);

export const metadata: Metadata = {
  title: "Bank app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
