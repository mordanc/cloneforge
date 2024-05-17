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
  },
  (games) => {
    return {
      uniqueIdx: uniqueIndex("game_title").on(games.title),
    };
  }
);

// export const gamesRelations = relations(GamesTable, ({ many }) => ({
//   gamesToCategories: many(gamesToCategories),
// }));

// export const CategoriesTable = pgTable(
//   "categories",
//   {
//     id: serial("id").primaryKey(),
//     title: text("title").notNull(),
//     createdAt: timestamp("createdAt").defaultNow().notNull(),
//   },
//   (categories) => {
//     return {
//       uniqueIdx: uniqueIndex("category_title").on(categories.title),
//     };
//   }
// );

// export const categoriesRelations = relations(CategoriesTable, ({ many }) => ({
//   gamesToCategories: many(gamesToCategories),
// }));

// export const gamesToCategories = pgTable(
//   "games_to_categories",
//   {
//     gameId: integer("user_id")
//       .notNull()
//       .references(() => GamesTable.id),
//     categoryId: integer("group_id")
//       .notNull()
//       .references(() => CategoriesTable.id),
//   },
//   (t) => ({
//     pk: primaryKey({ columns: [t.gameId, t.categoryId] }),
//   })
// );
