import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const GamesTable = pgTable(
  "games",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    numMods: integer("numMods").notNull(),
    numDownloads: integer("numDownloads").notNull(),
    tileURL: text("tileURL").notNull(),
    backdropURL: text("backdropURL").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    description: text("description").notNull(),
  },
  (games) => {
    return {
      uniqueIdx: uniqueIndex("game_title").on(games.title),
    };
  }
);

export const gamesRelations = relations(GamesTable, ({ many }) => ({
  addons: many(AddonsTable),
}));

export const AddonsTable = pgTable(
  "addons",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    gameId: integer("gameId"),
  },
  (addons) => {
    return {
      uniqueIdx: uniqueIndex("addon_title").on(addons.title),
    };
  }
);

export const addonsRelations = relations(AddonsTable, ({ one }) => ({
  Game: one(GamesTable, {
    fields: [AddonsTable.gameId],
    references: [GamesTable.id],
  }),
}));
