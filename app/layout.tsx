import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-[#f8f9fd] dark:bg-black`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
