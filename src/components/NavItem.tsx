import Link from "next/link";
import React from "react";

interface NavItemProps {
  text: string;
  href: string;
}

export default function NavItem({ text, href }: NavItemProps) {
  return (
    <Link href={href}>
      <span className="hover:border-b-4 pb-4 hover:border-b-orange-500">{text}</span>
    </Link>
  );
}
