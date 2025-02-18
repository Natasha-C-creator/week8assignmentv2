import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Link from "next/link";
import postStyles from "./posts.module.css";
import AccessibilityBar from "./components/Accessibility";

const roboto = Roboto_Mono({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "Slow Living Blog",
  description: "Generated by Natasha C creator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AccessibilityBar />
        {children}
      </body>
    </html>
  );
}
