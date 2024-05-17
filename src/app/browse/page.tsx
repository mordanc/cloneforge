"use client";

import { useState } from "react";
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

export default function Browse() {
  const [selectedSort, setSelectedSort] = useState("Popularity");

  const games = getRandomGames(12);
  return (
    <div className="  max-w-5xl flex flex-col space-y-8 w-full mx-auto">
      {/* copy */}
      <Header />

      {/* search */}

      <div className="flex h-16">
        <Input
          className="h-full"
          type="text"
          placeholder="Search for a game..."
        />
        <Button className="h-full ml-4 w-16">
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
              {/* <SelectLabel>Popularity</SelectLabel> */}
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
          />
        ))}
      </div>
    </div>
  );
}
