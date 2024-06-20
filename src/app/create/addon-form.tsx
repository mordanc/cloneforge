"use client";

import React, { useEffect } from "react";
import PageWrapper from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  GameWithAddons,
  createAddon,
  createGame,
  getGames,
} from "@/server/queries";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { GameCombobox } from "./game-combobox";
import { CommandItem } from "@/components/ui/command";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Game } from "@/types";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function AddonForm() {
  const [title, setTitle] = useState("");

  const [gameId, setGameId] = useState(0);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [gamesList, setGamesList] = useState<Game[]>([]);

  const getGamesList = async (limit: number) => {
    const games = await getGames(limit);
    setGamesList(games);
  };

  useEffect(() => {
    getGamesList(10);
  }, []);

  const onSubmit = () => {
    createAddon({
      title,
      gameId,
    });
  };
  return (
    <form
      onSubmit={() => onSubmit()}
      className="grid grid-cols-2 gap-4 border p-3 border-slate-500"
    >
      <label>Title</label>
      <Input
        placeholder="Cool Addon"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Game ID</label>
      <Input
        value={gameId}
        type="number"
        onChange={(e) => setGameId(Number(e.target.value))}
      />

      <label>Game</label>

      <GameCombobox value={value}>
        {gamesList.map((game) => (
          <CommandItem
            key={game.id}
            value={game.id?.toString()}
            onSelect={(currentValue) => {
              setGameId(Number(currentValue));
              setValue(currentValue === value ? "" : currentValue);
              setOpen(false);
            }}
          >
            <Check
              className={cn(
                "mr-2 h-4 w-4",
                value === game.id?.toString() ? "opacity-100" : "opacity-0"
              )}
            />
            {game.title}
          </CommandItem>
        ))}
        {/* {frameworks.map((framework) => (
          <CommandItem
            key={framework.value}
            value={framework.value}
            onSelect={(currentValue) => {
              setValue(currentValue === value ? "" : currentValue);
              setOpen(false);
            }}
          >
            <Check
              className={cn(
                "mr-2 h-4 w-4",
                value === framework.value ? "opacity-100" : "opacity-0"
              )}
            />
            {framework.label}
          </CommandItem>
        ))} */}
      </GameCombobox>

      <Button type="submit">Submit</Button>
    </form>
  );
}
