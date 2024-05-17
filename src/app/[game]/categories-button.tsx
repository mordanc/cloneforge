"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import React from "react";
import { ChevronDown } from "lucide-react";

export const categories = [
  "Achievements",
  "Action Bars",
  "Artwork",
  "Auction & Economy",
  "Audio & Video",
  "Bags & Inventory",
  "Boss Encounters",
  "Buffs & Debuffs",
  "Chat & Communication",
  "Class",
  "Combat",
  "Companions",
  "Data Export",
  "Development Tools",
  "Garrison",
  "Guild",
  "Libraries",
  "Mail",
  "Map & Minimap",
  "Minigames",
  "Miscellaneous",
  "Plugins",
  "Professions",
  "PvP",
  "Quests & Leveling",
  "Roleplay",
  "Tooltip",
  "Twitch Integration",
  "Unit Frames",
];

export function CategoriesButton({ title }: { title: string }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-full">
          Categories <ChevronDown className="ml-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={4} align="start" className="w-[64rem]">
        <div className="grid gap-4">
          <div className="grid gap-2 grid-cols-3">
            {categories.map((category, i) => (
              <Link href={`/${title}/${category}`} key={category}>
                <Button variant={'link'}>{category}</Button>
              </Link>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
