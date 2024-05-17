"use client";

import { Header } from "@/components/header";
import Description from "./description";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { CategoriesButton } from "./categories-button";
import PageWrapper from "@/components/page-wrapper";
import { getRandomGame } from "@/lib/mock-data";
import { ImageBackdrop } from "@/components/image-backdrop";
import { createGame, deleteGame, getGameByTitle } from "@/server/actions";
import { useEffect, useState } from "react";
import { Game } from "@/types";

export default function Page({ params }: { params: { game: string } }) {
  const title = decodeURI(params.game);
  const [gameInfo, setGameInfo] = useState<Game>({
    title: "",
    numMods: 0,
    numDownloads: 0,
    tileURL: "",
    backdropURL: "",
  });

  const getGame = async () => {
    const testGame = await getGameByTitle(title);
    setGameInfo(testGame[0]);
    console.log(testGame);
  };

  useEffect(() => {
    getGame();
  }, []);

  return (
    <PageWrapper>
      <ImageBackdrop size="default" url={gameInfo?.backdropURL} />

      <div className=" flex flex-col space-y-8 z-10 ">
        <Description gameInfo={gameInfo} />

        <div className="flex h-16 w-full">
          <CategoriesButton title={title} />
          <div className="h-16 mx-3 border-r dark:border-r-slate-400" />
          <Input
            className="h-full"
            type="text"
            placeholder="Search for a game..."
          />
          <Button className="h-full ml-4 w-16">
            <Search size={"1.5rem"} />
          </Button>
        </div>
      </div>

      <Button
        className="mt-4"
        onClick={() => {
          gameInfo.id && deleteGame(gameInfo.id);
        }}
        variant={"default"}
      >
        Delete
      </Button>
    </PageWrapper>
  );
}
