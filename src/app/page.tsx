import { Button } from "@/components//ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search } from "lucide-react";
import { randomNumber } from "@/lib/mock-data";
import { GameInfoCard } from "@/components/game-info-card";
import { Header } from "@/components/header";
import PageWrapper from "@/components/page-wrapper";
import { getGames } from "@/server/actions";
import { ImageBackdrop } from "@/components/image-backdrop";

import HomeCarousel from "@/components/home-carousel";
import CTA from "@/components/cta";

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
          {games.map((game) => (
            <GameInfoCard
              key={game.id}
              numMods={game.numMods}
              numDownloads={game.numDownloads}
              title={game.title}
              tileURL={game.tileURL}
            />
          ))}
        </div>

        <HomeCarousel />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <CTA
            src="https://utfs.io/f/4fa451d5-5141-46e5-a4cc-d7df38fedf38-sgti3d.webp"
            header={"Become an Author and get rewarded!"}
            body={
              "Upload your projects to enjoy awesome management tools and get rewarded for your creations."
            }
            buttonText={"Become an author"}
            href="/author"
          />
          <CTA
            src="https://utfs.io/f/4fa451d5-5141-46e5-a4cc-d7df38fedf38-sgti3d.webp"
            header={"Become an Author and get rewarded!"}
            body={
              "Upload your projects to enjoy awesome management tools and get rewarded for your creations."
            }
            buttonText={"Become an author"}
            href="/author"
          />
        </div>

        <div className="p-6 bg-slate-700 h-[400px] w-full">
          <span>New</span>
          <div className="flex space-x-4 mt-4">
            <div className="flex flex-col items-center  h-[300px] w-1/3 bg-gradient-to-r from-slate-500 to-gray-500">
              Game Title
            </div>
            <div className="h-[300px] w-1/3 bg-gradient-to-r from-slate-500 to-gray-500">
              1
            </div>
            <div className="h-[300px] w-1/3 bg-gradient-to-r from-slate-500 to-gray-500">
              1
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
