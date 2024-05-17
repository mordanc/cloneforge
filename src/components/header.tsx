import React from "react";

export function Header() {
  return (
    <div className="flex flex-col items-center ">
      <p className="text-4xl">
        Explore thousands of{" "}
        <span className="text-orange-500">legendary mods</span>
      </p>
      <p className="text-lg mt-4">
        Over <span className="text-orange-500">500K</span> mods, created by{" "}
        <span className="text-orange-500">134K</span> mod authors.{" "}
        <span className="text-orange-500">$14M</span> rewarded to authors on
        CloneForge
      </p>
    </div>
  );
}
