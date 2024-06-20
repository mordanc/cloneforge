"use client";

import { Button } from "@/components/ui/button";
import { GameWithAddons, deleteGame } from "@/server/queries";

export default function DeleteGameButton({
  gameInfo,
}: {
  gameInfo?: GameWithAddons;
}) {
  return (
    <Button
      className="mt-4"
      onClick={() => {
        gameInfo?.id && deleteGame(gameInfo.id);
      }}
      variant={"default"}
    >
      Delete
    </Button>
  );
}
