import Image from "next/image";
import { Button } from "@/components//ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search } from "lucide-react";
import { getRandomGames, randomNumber } from "@/lib/mock-data";
import { GameInfoCard } from "@/components/game-info-card";
import { Header } from "@/components/header";
import PageWrapper from "@/components/page-wrapper";
import { getGames } from "@/server/actions";
import { ImageBackdrop } from "@/components/image-backdrop";

export default async function Home() {
  const games = await getGames(5);
  return (
    <PageWrapper>
      <ImageBackdrop
        url="https://utfs.io/f/803153c1-c932-4f9d-a470-ac1694019bfc-vqi2fv.jpg"
        size={"lg"}
      />
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

        <div className="flex w-full justify-between">
          <h1 className="text-xl ">Featured Games</h1>
          <Button variant="link" className="text-orange-500">
            <span className="mr-2 text-orange-500">View All</span>
            <ChevronRight className="text-orange-500" />
          </Button>
        </div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-2 xl:gap-8 gap-4">
          {games.map((game, index) => (
            <GameInfoCard
              key={index + randomNumber(1, 9999)}
              numMods={game.numMods}
              numDownloads={game.numDownloads}
              title={game.title}
              tileURL={game.tileURL}
            />
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}
