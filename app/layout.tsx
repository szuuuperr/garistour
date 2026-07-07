import type { Metadata } from "next";
import { Staatliches, DM_Sans } from "next/font/google";
import "./globals.css";

const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-staatliches",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Garistour",
  description: "Jelajahi destinasi terbaik bersama Garistour.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${staatliches.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
