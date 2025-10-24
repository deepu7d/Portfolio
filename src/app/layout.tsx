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
          <SideBar />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center md:p-10">
            <nav className="sticky top-0 left-0 flex w-full items-center justify-center gap-2 border-b-1 border-neutral-500/50 bg-black p-2 md:hidden">
              <IconMenu2 className="absolute left-4" />
              <h1 className="font-bold">deepu7d</h1>
              <IconRosetteDiscountCheckFilled className="inline-block h-6 w-6 text-blue-500" />
              <IconDotsVertical className="absolute right-4" />
            </nav>
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
