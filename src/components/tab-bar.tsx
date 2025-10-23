"use client";
import Link from "next/link";
import { useState } from "react";

const TAB_ITEMS = [
  {
    title: "Project",
    url: "/",
  },
  {
    title: "Skills",
    url: "/skills",
  },
  {
    title: "Experience",
    url: "/experience",
  },
];

export default function TabBar() {
  const [activeTab, setActiveTab] = useState<string>("Project");
  return (
    <ul className="flex w-full justify-center gap-20 border-b-1 border-neutral-600">
      {TAB_ITEMS.map((item) => (
        <li
          key={item.title}
          className={`inline-block px-4 pb-2 text-neutral-200 ${activeTab === item.title ? "border-b-2 border-white font-medium text-white" : ""}`}
        >
          <Link href={item.url} onClick={() => setActiveTab(item.title)}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
