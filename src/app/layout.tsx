import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ryokou",
  description: "A catalogue of different road trips and travel desinations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
