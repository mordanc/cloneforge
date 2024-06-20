"use client";

import { cn } from "@/lib/utils";

export default function CreateGameSelector({
  active,
  text,
}: {
  active: boolean;
  text: string;
}) {
  return (
    <span
      className={cn("hover:text-orange-500 cursor-pointer transition", {
        "text-orange-500": active,
      })}
    >
      {text}
    </span>
  );
}
