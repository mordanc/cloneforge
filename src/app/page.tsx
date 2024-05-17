import Image from "next/image";
import { Button } from "@/components//ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { getRandomGames, randomNumber } from "@/lib/mock-data";
import { GameInfoCard } from "@/components/game-info-card";
import { Header } from "@/components/header";
import PageWrapper from "@/components/page-wrapper";

export default function Home() {
  const games = getRandomGames(12);
  return (
    <PageWrapper>
      <main className="flex flex-col items-center space-y-12">
        <Header />
        <div className="flex h-16 w-full">
          <Input
            className="h-full"
            type="text"
            placeholder="Search for a game..."
          />
          <Button className="h-full ml-4 w-16">
            <Search size={"1.5rem"} />
          </Button>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-5 grid-cols-2 xl:gap-8 gap-4">
          {games.map((game, index) => (
            <GameInfoCard
              key={index + randomNumber(1, 9999)}
              numMods={game.numMods}
              numDownloads={game.numDownloads}
              title={game.title}
            />
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}
