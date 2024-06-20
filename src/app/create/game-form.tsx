import React from "react";
import PageWrapper from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createGame } from "@/server/queries";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function GameForm() {
  const [title, setTitle] = useState("");
  const [tileURL, setTileURL] = useState("");
  const [backdropURL, setBackdropURL] = useState("");
  const [numMods, setNumMods] = useState(0);
  const [numDownloads, setNumDownloads] = useState(0);

  const [description, setDescription] = useState("");

  const onSubmit = () => {
    createGame({
      title,
      numMods,
      numDownloads,
      tileURL,
      backdropURL,
      description,
    });
  };
  return (
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

      <label>Description</label>
      <textarea
        value={description}
        className="h-[200px]"
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button type="submit">Submit</Button>
      <Button
        type="button"
        onClick={() => {
          console.log(description.split("\n"));
        }}
      >
        test
      </Button>
    </form>
  );
}
