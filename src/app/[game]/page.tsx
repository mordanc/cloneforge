import Description from "./description";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search } from "lucide-react";
import { CategoriesButton } from "./categories-button";
import PageWrapper from "@/components/page-wrapper";
import { ImageBackdrop } from "@/components/image-backdrop";
import { deleteGame, getGameByTitle } from "@/server/queries";
import DeleteGameButton from "./delete-game-button";
import Link from "next/link";

export default async function Page({ params }: { params: { game: string } }) {
  const title = decodeURI(params.game);

  const gameInfo = await getGameByTitle(title);

  return (
    <PageWrapper>
      <ImageBackdrop size="default" url={gameInfo?.backdropURL ?? ""} />

      <div className=" flex flex-col space-y-8 z-10 ">
        <Description gameInfo={gameInfo} />

        <div className="flex h-16 w-full">
          <CategoriesButton title={title} />
          <div className="h-16 mx-3 border-r dark:border-r-slate-400" />
          <Input
            className="h-full"
            type="text"
            placeholder="Search for a game..."
          />
          <Button className="h-full ml-4 w-16">
            <Search size={"1.5rem"} />
          </Button>
        </div>
      </div>

      <DeleteGameButton gameInfo={gameInfo} />

      <div className="w-full justify-between flex">
        <h1 className="my-6">Latest Mods</h1>
        <Link href="">
          <Button variant="link">View All</Button>
        </Link>
      </div>

      {/* replace with getting game with 5 most recent addons from action */}

      <div className="grid grid-cols-5 gap-4">
        {[
          ...(gameInfo ? gameInfo?.addons : []),
          ...(gameInfo ? gameInfo?.addons : []),
          ...(gameInfo ? gameInfo?.addons : []),
          ...(gameInfo ? gameInfo?.addons : []),
          ...(gameInfo ? gameInfo?.addons : []),
          ...(gameInfo ? gameInfo?.addons : []),
          ...(gameInfo ? gameInfo?.addons : []),
          ...(gameInfo ? gameInfo?.addons : []),
        ]
          .slice(0, 5)
          .map((addon, i) => (
            <div
              key={addon.id + i}
              className="border p-3 h-[250px] bg-slate-600  cursor-pointer hover:scale-125 transition"
            >
              <div className="h-[150px] bg-white"></div>
              <h3 className="truncate">{addon.title} </h3>
              <h3 className="text-gray-300 truncate">By Author</h3>

              <div className="flex space-x-4 mt-2">
                <Download /> <span>2.2k</span>
                <div className="border px-1">Mods</div>
              </div>
            </div>
          ))}
      </div>
    </PageWrapper>
  );
}
