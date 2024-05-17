import React from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-24 w-full max-w-5xl mx-auto">{children}</div>;
}
