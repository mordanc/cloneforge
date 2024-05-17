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

export interface Game {
  title: string;
  numMods: number;
  numDownloads: number;
  tileURL: string;
}
