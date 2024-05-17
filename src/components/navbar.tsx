import React from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import { ModeToggle } from "./ui/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

const NavItems = [
  { text: "Browse", url: "/browse" },
  { text: "Create", url: "/about" },
  { text: "Studios", url: "/contact" },
  { text: "Community", url: "/contact" },
  { text: "Support", url: "/contact" },
];

export default function Navbar() {
  return (
    <div className="flex shadow-lg justify-between px-6 py-4 sticky top-0 dark:bg-slate-950 bg-gray-300">
      <div className="flex space-x-4 items-center">
        <Link href="/">
          <span className="xl:mr-24 cursor-pointer">CloneForge</span>
        </Link>
        {NavItems.map((item) => (
          <NavItem key={item.text} text={item.text} href={item.url} />
        ))}
      </div>
      <div className="flex space-x-4 items-center">
        <Button variant={"link"} className="items-center">
          <Flame />
          <span className="ml-2">Surprise Me</span>
        </Button>

        {/* <Button type="Secondary" text="Legacy" /> */}
        <Button variant={"outline"} className="rounded-none">
          Legacy
        </Button>
        <Button variant={"default"} className="rounded-none">
          Get CloneForge App
        </Button>
        <Button variant={"outline"} className="rounded-none">
          Log In
        </Button>

        <ModeToggle />
      </div>
    </div>
  );
}
