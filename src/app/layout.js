

import { Inter } from "next/font/google";
import "./globals.css";
import MainComponent from "@/components/mainComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainComponent>
          {children}
        </MainComponent>
      </body>
    </html>
  );
}
