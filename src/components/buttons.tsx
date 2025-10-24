import { cn } from "@/lib/utils";
import React from "react";

export default function Buttons({ className }: { className?: string }) {
  return (
    <div className="flex gap-2">
      <button
        className={cn(
          `w-24 cursor-pointer rounded-lg bg-blue-600 p-1 font-medium hover:bg-blue-700`,
          className,
        )}
      >
        Follow
      </button>
      <button
        className={cn(
          `w-24 cursor-pointer rounded-lg bg-neutral-800 p-1 font-medium hover:bg-neutral-700`,
          className,
        )}
      >
        Message
      </button>
    </div>
  );
}
