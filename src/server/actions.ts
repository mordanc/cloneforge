"use server";

import { Game } from "@/types";
import { db } from "@/server/db";
import { GamesTable } from "./db/schema";
import { eq } from "drizzle-orm";

export async function createGame({
  title,
  numMods,
  numDownloads,
  tileURL,
  backdropURL,
}: Game) {
  await db.insert(GamesTable).values({
    title,
    numMods,
    numDownloads,
    tileURL,
    backdropURL,
  });
}

export async function getGames() {
  return db.select().from(GamesTable);
}

export async function getGameById(id: number) {
  return db.select().from(GamesTable).where(eq(GamesTable.id, id));
}

export async function getGameByTitle(title: string) {
  return db.select().from(GamesTable).where(eq(GamesTable.title, title));
}

export async function deleteGame(id: number) {
  await db.delete(GamesTable).where(eq(GamesTable.id, id));
}
