import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import SideBar from "@/components/sidebar";
import HeaderMobile from "@/components/header-mobile";
import TabBar from "@/components/tab-bar";
import HeaderDesktop from "@/components/header-desktop";
import {
  IconDots,
  IconDotsVertical,
  IconMenu2,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import MobileNav from "@/components/mobile-nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Deepanshu",
  description: "Learn more about Deepanshu",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="flex">
          <div className="hidden md:block">
            <SideBar />
          </div>
          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center md:p-10">
            <MobileNav />
            <HeaderMobile />
            <HeaderDesktop />
            <TabBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
