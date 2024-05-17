"use client";

import PageWrapper from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createGame } from "@/server/actions";
import { useState } from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [tileURL, setTileURL] = useState("");
  const [backdropURL, setBackdropURL] = useState("");
  const [numMods, setNumMods] = useState(0);
  const [numDownloads, setNumDownloads] = useState(0);

  const onSubmit = () => {
    createGame({
      title,
      numMods,
      numDownloads,
      tileURL,
      backdropURL,
    });
  };

  return (
    <PageWrapper>
      <h1 className="mb-12 text-2xl">Create a Game</h1>
      <form
        onSubmit={() => onSubmit()}
        className="grid grid-cols-2 gap-4 border p-3 border-slate-500"
      >
        <label>Title</label>
        <Input
          placeholder="Cool Game"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Number of mods</label>
        <Input
          value={numMods}
          type="number"
          onChange={(e) => setNumMods(Number(e.target.value))}
        />

        <label>Number of downloads</label>
        <Input
          value={numDownloads}
          type="number"
          onChange={(e) => setNumDownloads(Number(e.target.value))}
        />

        <label>Tile Image</label>
        <Input
          type="text"
          placeholder="https://example.com/image.jpg"
          value={tileURL}
          onChange={(e) => setTileURL(e.target.value)}
        />

        <label>Backdrop Image</label>
        <Input
          type="text"
          placeholder="https://example.com/image.jpg"
          value={backdropURL}
          onChange={(e) => setBackdropURL(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </PageWrapper>
  );
}
