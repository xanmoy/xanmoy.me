import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanmoy Ganguly | Software Engineer",
  description: "Tanmoy Ganguly is a software engineer based in India. He is passionate about building software and solving problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-950 text-slate-100">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
