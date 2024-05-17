import { Game } from "@/types";

export const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const gameTitlesAndTiles = [
  {
    title: "World of Warcraft",
    tileURL:
      "https://utfs.io/f/574c0290-48d1-4a8e-93a3-2940ae737137-ce8p23.jpg",
  },
  {
    title: "Minecraft",
    tileURL:
      "https://utfs.io/f/d644a4c0-a0ef-4779-9530-19d11e99dad8-5g9uci.jpg",
  },
  {
    title: "The Sims 4",
    tileURL:
      "https://utfs.io/f/0874b9d1-534a-442b-a4a9-f7011ef7c22a-1bkahk.png",
  },
  {
    title: "World of Tanks",
    tileURL:
      "https://utfs.io/f/21ec4152-b575-4bb8-b327-64f752221449-4xx4uq.jpg",
  },
  {
    title: "Stardew Valley",
    tileURL:
      "https://utfs.io/f/ee868624-0983-4542-9e28-ed22868d295f-81sqhd.jpg",
  },
  {
    title: "Skyrim",
    tileURL:
      "https://utfs.io/f/8b164851-5d7b-42a0-80a0-4fd99c2345d7-6d460z.png",
  },
  {
    title: "Starcraft 2",
    tileURL:
      "https://utfs.io/f/f2549cbe-cfde-4852-8ffd-677c3015191b-kst98u.jpg",
  },
  {
    title: "Terraria",
    tileURL:
      "https://utfs.io/f/da774aa3-857c-4a85-9c0b-0a7e01b74818-jgob9i.jfif",
  },
];

export const getRandomGame = (): Game => {
  const game =
    gameTitlesAndTiles[Math.floor(Math.random() * gameTitlesAndTiles.length)];
  return {
    title: game.title,
    numMods: randomNumber(100, 999),
    numDownloads: randomNumber(100, 999),
    tileURL: game.tileURL,
    backdropURL: game.tileURL,
    description: game.tileURL,
  };
};

export const getRandomGames = (num: number) => {
  let games: Game[] = [];
  for (let i = 0; i < num; i++) {
    games.push(getRandomGame());
  }
  return games;
};
