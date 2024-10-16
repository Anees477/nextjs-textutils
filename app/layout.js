import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TextUtils - App",
  description: "This is the website which is providing you a different facilities like text to uppercase, lowercase, clear, remove extra spaces, copy a text etc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
        </body>
    </html>
  );
}
