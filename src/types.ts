import { GamesTable } from "./server/db/schema";

export interface Addon {
  id: string;
  name: string;
  slug: string;
  categories: string[];
  downloads: number;
  lastUpdated: string;
  gameVersion: string;
  summary: string;
  description: string;
  authors: Author[];
  attachments: Attachment[];
}
export interface Author {
  name: string;
  url: string;
}

export interface Attachment {
  id: string;
  title: string;
  url: string;
}

// export interface Game {
//   title: string;
//   numMods: number;
//   numDownloads: number;
//   tileURL: string;
//   categories: string[];
// }

export const categories = [
  "Achievements",
  "Action Bars",
  "Artwork",
  "Auction & Economy",
  "Audio & Video",
  "Bags & Inventory",
  "Boss Encounters",
  "Buffs & Debuffs",
  "Chat & Communication",
  "Class",
  "Combat",
  "Companions",
  "Data Export",
  "Development Tools",
  "Garrison",
  "Guild",
  "Libraries",
  "Mail",
  "Map & Minimap",
  "Minigames",
  "Miscellaneous",
  "Plugins",
  "Professions",
  "PvP",
  "Quests & Leveling",
  "Roleplay",
  "Tooltip",
  "Twitch Integration",
  "Unit Frames",
] as const;

// above array as an type
export type Category = (typeof categories)[number];

export type Game = typeof GamesTable.$inferInsert;
