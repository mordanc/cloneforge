"use client";

import { useEffect, useState } from "react";
import { GameInfoCard } from "../../components/game-info-card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getRandomGames, randomNumber } from "@/lib/mock-data";
import { Header } from "@/components/header";
import PageWrapper from "@/components/page-wrapper";
import { getGames, searchGames } from "@/server/actions";
import { Game } from "@/types";
import { ImageBackdrop } from "@/components/image-backdrop";
import { useSearchParams } from "next/navigation";

export default function Browse() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const [selectedSort, setSelectedSort] = useState("Popularity");
  const [searchText, setSearchText] = useState<string>(search ?? "");

  const [games, setGames] = useState<Game[]>([]);

  const populateList = async () => {
    if (!searchText) {
      const res = await getGames();
      setGames(res);
    } else {
      console.log(searchText)
      const res = await searchGames(searchText);
      setGames(res);
    }
  };

  useEffect(() => {
    populateList();
  }, []);

  return (
    <PageWrapper className="flex flex-col space-y-12">
      <Header />
      <ImageBackdrop
        url="https://utfs.io/f/803153c1-c932-4f9d-a470-ac1694019bfc-vqi2fv.jpg"
        size={"lg"}
      />

      {/* search */}
      <div className="flex h-16 ">
        <Input
          className="h-full"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for a game..."
        />
        <Button
          className="h-full ml-4 w-16"
          onClick={() => populateList()}
        >
          <Search size={"1.5rem"} />
        </Button>
      </div>

      {/* sorting */}
      <div className="flex space-x-4 items-center">
        <span>Sort by:</span>
        <Select onValueChange={(e) => setSelectedSort(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Popularity" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Popularity">Popularity</SelectItem>
              <SelectItem value="Name">Name</SelectItem>
              <SelectItem value="New">New</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* list */}
      <h1 className="text-xl ">Games</h1>
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 grid-cols-2 gap-4">
        {games.map((game, index) => (
          <GameInfoCard
            key={index + randomNumber(1, 9999)}
            numMods={game.numMods}
            numDownloads={game.numDownloads}
            title={game.title}
            tileURL={game.tileURL}
          />
        ))}
      </div>

      {games.length === 0 && (
        <div className="text-center w-full">
          <h1 className="  text-2xl">No games found</h1>
        </div>
      )}
    </PageWrapper>
  );
}
