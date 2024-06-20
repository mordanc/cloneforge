import "server-only";

import { Game } from "@/types";
import { db } from "@/server/db";
import { AddonsTable, GamesTable } from "./db/schema";
import { eq, like } from "drizzle-orm";

export async function createGame({
  title,
  numMods,
  numDownloads,
  tileURL,
  backdropURL,
  description,
}: Game) {
  await db.insert(GamesTable).values({
    title,
    numMods,
    numDownloads,
    tileURL,
    backdropURL,
    description,
  });
}

// ALWAYS VERIFY THE CURRENT USER HAS ACCESS TO THE DATA YOU'RE READING BEOFRE SENDING THE SUBSET THEY NEED BACK

export async function getGames(num: number = 100) {
  return db.select().from(GamesTable).limit(num);
}

export async function getGameById(id: number) {
  return db.query.GamesTable.findFirst({
    with: { addons: true },
    where: eq(GamesTable.id, id),
  });
}

export async function searchGames(query: string) {
  console.log(query);
  return db
    .select()
    .from(GamesTable)
    .where(like(GamesTable.title, `%${query}%`));
}

export async function getGameByTitle(title: string) {
  return db.query.GamesTable.findFirst({
    with: { addons: true },
    where: eq(GamesTable.title, title),
  });
  // return db.select().from(GamesTable).where(eq(GamesTable.title, title));
}

export type GameWithAddons = Awaited<ReturnType<typeof getGameByTitle>>;

export async function deleteGame(id: number) {
  await db.delete(GamesTable).where(eq(GamesTable.id, id));
}

export async function createAddon({
  title,
  gameId,
}: {
  title: string;
  gameId: number;
}) {
  await db.insert(AddonsTable).values({
    title,
    gameId,
  });
}

export async function deleteAddon(id: number) {
  await db.delete(AddonsTable).where(eq(AddonsTable.id, id));
}
