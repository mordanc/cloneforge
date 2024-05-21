import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface CTAProps {
  src: string;
  header: string;
  body: string;
  buttonText: string;
  href: string;
}
export default function CTA({ src, header, body, buttonText, href }: CTAProps) {
  return (
    <div>
      <Image src={src} alt="carousel item" width={612} height={508} />
      <div className="flex flex-col  space-y-4">
        <div className="text-gray-300">{header}</div>
        <div className="text-gray-400">{body}</div>
        <Link href={href}>
          <Button role="link" className="self-end">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
