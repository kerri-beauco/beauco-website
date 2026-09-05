import type { Metadata } from "next";
import { Jost, Inter } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Beau & Co. Marketing",
  description:
    "Senior marketing leadership that embeds alongside your team. Beau & Co. Marketing, Hamilton, Ontario.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
