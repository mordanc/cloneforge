import Image from "next/image";
import React from "react";
import { Puzzle, Download } from "tabler-icons-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface GameInfoCardProps {
  numMods: number;
  numDownloads: number;
  title: string;
}

export const GameInfoCard = ({
  numMods,
  numDownloads,
  title,
}: GameInfoCardProps) => {
  return (
    <div className="cursor-pointer">
      <div className="hover:opacity-75">
        <Link href={`/${title}`}>
          <Image
            src={
              "https://utfs.io/f/f9cfeba4-e114-451a-8213-fb5d39f72215-989wo6.webp"
            }
            alt="dragonflight"
            width={285}
            height={380}
          />
        </Link>
      </div>

      <span>{title}</span>

      <div className="flex space-x-4 w-full">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex space-x-2">
                <Puzzle /> <span>{numMods}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Mods</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <div className=" flex space-x-2">
                <Download /> <span>{numDownloads}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Downloads</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
