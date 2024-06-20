import { createGame } from "@/server/queries";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";

const imageBackdropVariants = cva("", {
  variants: {
    size: {
      default: "h-[450px]",
      sm: "h-[250px]",
      lg: "h-[650px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type ImageBackdropProps = VariantProps<typeof imageBackdropVariants> & {
  url: string;
};

export function ImageBackdrop({ size, url }: ImageBackdropProps) {
  return (
    <>
      <Image
        className={cn(
          "absolute top-0 right-0 w-full -z-10",
          imageBackdropVariants({ size })
        )}
        src={url}
        alt="dragonflight"
        width={1280}
        height={720}
      />
      <div
        className={cn(
          "bg-gradient-to-b from-transparent dark:to-slate-950  absolute top-0 right-0 w-full -z-10 h-[450px] to-70% to-white",
          imageBackdropVariants({ size })
        )}
      />
    </>
  );
}
