import Link from "next/link";
import React from "react";

export default function PageWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className} pt-24 w-full  lg:max-w-5xl mx-auto px-2`}>
      {children}
      <div className="h-2 border-b pt-8 border-gray-400"></div>

      <div className="text-center text-gray-400 mt-16 mb-8">
        This is a recreation of CurseForge using ShadCN and NextJS. Original{" "}
        <Link href="https://www.curseforge.com/" className="text-blue-600">
          here
        </Link>
      </div>
    </div>
  );
}
