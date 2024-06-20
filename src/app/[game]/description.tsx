"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Game } from "@/types";

function Description({ gameInfo }: { gameInfo?: Game }) {
  const [truncateDescription, setTruncateDescription] = useState(true);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  return gameInfo ? (
    <div className="flex space-x-4">
      <div>
        <Image
          src={gameInfo.tileURL}
          alt="dragonflight"
          width={150}
          height={150}
        />
      </div>
      <div className="dark:text-slate-400 flex flex-col space-y-4 transition-all">
        <div className="flex items-center h-min space-x-4 ">
          <h1 className="text-3xl dark:text-slate-300">
            {gameInfo.title} Addons
          </h1>
          <div>
            <span className="w-2 border-l"></span>
          </div>
          <p>Num projects</p>
        </div>

        <p>WoW addons on CloneForge - the Home for the Best WoW Addons</p>
        <div ref={parent}>
          <p
            className={clsx("lg:max-w-3xl max-w-md transition", {
              truncate: truncateDescription,
            })}
          >
            Discover the best World of Warcraft Addons in the kingdom. World of
            Warcraft is an MMORPG that lets players explore a vast open-game
            world; traveling across the landscape, battling monsters, completing
            quests, and interacting with NPCs or other players.
          </p>

          {!truncateDescription && (
            <>
              <br />
              <p className="max-w-3xl">
                WoW is a super popular title, and WoW addons are an integral
                part of the game and the enthusiastic community around it. On
                this page, you’ll be able to become part of the community and
                easily access the best WoW addons around. From World of Warcraft
                addons that change how the game looks, through addons that
                simplify UI, and all the way to WoW addons that send useful
                screen prompts when they’re most needed - you can find them
                here. All you have to do is go over the page, check out the
                descriptions and photos of the WoW addons of your choice, and
                see which ones you’d like to try. Found the ones that work best
                for you? Awesome. Just download them and you’re good to go. In
                addition to addons for the popular WoW TBC and WoTLK, CurseForge
                has many classic WoW addons too - fit for any situation, all
                aimed to make your game experience even better and fully
                customized to your needs. With CF, installing WoW addons is just
                as easy as discovering and downloading them - so you’re
                completely covered. One of the things that all World of Warcraft
                addons have in common is that they’re 100% free. So you can try
                any WoW addon you like and see which one creates the game
                experience that’s best for you.{" "}
              </p>
              <br />
              <p className="max-w-3xl">
                The most important thing to keep in mind with these addons for
                World of Warcraft is to have fun with them. So try all of them
                out until you find your favorite ones.
              </p>
            </>
          )}
        </div>

        <div>
          <Button
            onClick={() => setTruncateDescription((t) => !t)}
            variant={"ghost"}
            className="text-orange-500"
          >
            Read {truncateDescription ? "more" : "less"}
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <div>No Game Info</div>
  );
}

export default Description;
