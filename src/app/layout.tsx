import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISACA-IIT",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <NavBar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
      </body>
    </html>
  );
}
