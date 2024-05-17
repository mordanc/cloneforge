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
    </div>
  );
}
