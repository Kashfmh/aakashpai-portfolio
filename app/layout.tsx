import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aakash Pai — Software Engineer",
  description: "Personal portfolio of Aakash Pai — software engineer, full-stack developer, builder.",
  keywords: ["Aakash Pai", "portfolio", "software engineer", "developer"],
  authors: [{ name: "Aakash Pai" }],
  openGraph: {
    title: "Aakash Pai — Software Engineer",
    description: "Personal portfolio of Aakash Pai",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
