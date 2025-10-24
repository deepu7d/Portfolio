"use client";

import { useState, useEffect, useRef, ReactElement } from "react";
import { createPortal } from "react-dom";

type ModalAction = {
  label: string;
  style?: "default" | "danger";
  onClick: () => void;
};
const actions: ModalAction[] = [
  {
    label: "Block",
    style: "danger" as const, // Use "danger" for red text
    onClick: () => alert("Block clicked!"),
  },
  {
    label: "Restrict",
    style: "danger" as const,
    onClick: () => alert("Restrict clicked!"),
  },
  {
    label: "Report",
    style: "danger" as const,
    onClick: () => alert("Report clicked!"),
  },
  {
    label: "Share to...",
    style: "default" as const,
    onClick: () => alert("Share to... clicked!"),
  },
  {
    label: "About this account",
    style: "default" as const,
    onClick: () => alert("About this account clicked!"),
  },
];

export default function Modal({ children }: { children: ReactElement }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Effect to handle closing the modal with the 'Escape' key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Effect to handle closing when clicking outside the modal content
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Use a portal to render the modal at the root of the document
  const modalContent = isOpen ? (
    <div className="bg-opacity-60 fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div
        ref={modalRef}
        className="w-full max-w-sm"
        // Stop propagation to prevent clicks inside the modal from closing it
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Actions Menu */}
        <div className="flex flex-col overflow-hidden rounded-xl bg-[#262626]">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                action.onClick();
                setIsOpen(false); // Close modal after action
              }}
              className={`w-full cursor-pointer border-b border-neutral-700 py-3.5 text-center text-sm font-medium transition-colors last:border-b-0 ${action.style === "danger" ? "text-red-500" : "text-neutral-50"} hover:bg-neutral-700`}
            >
              {action.label}
            </button>
          ))}
        </div>

        {/* Cancel Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="mt-2 w-full cursor-pointer rounded-xl bg-[#262626] py-3.5 text-center text-sm font-semibold text-neutral-50 transition-colors hover:bg-neutral-700"
        >
          Cancel
        </button>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="inline-block cursor-pointer"
      >
        {children}
      </div>
      {typeof window === "object"
        ? createPortal(modalContent, document.body)
        : null}
    </>
  );
}
