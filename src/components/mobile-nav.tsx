"use client";

import {
  IconDotsVertical,
  IconMenu2,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import React, { useState } from "react";
import SideBar from "./sidebar";
import { BIO } from "@/constants/bio";
import Modal from "./modal";
export default function MobileNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="fixed top-0 left-0 h-dvh bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <SideBar />
          </div>
        </div>
      )}
      <nav className="sticky top-0 left-0 flex w-full items-center justify-between gap-2 border-b-1 border-neutral-500/50 bg-black p-2 px-4 md:hidden">
        <IconMenu2 onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex items-center justify-center gap-1">
          <h1 className="font-bold">{BIO.username}</h1>
          <IconRosetteDiscountCheckFilled className="h-6 w-6 text-blue-500" />
        </div>
        <Modal>
          <IconDotsVertical />
        </Modal>
      </nav>
    </>
  );
}
