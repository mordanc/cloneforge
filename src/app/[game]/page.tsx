import { Header } from "@/components/header";
import Description from "./description";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { CategoriesButton } from "./categories-button";
import Image from "next/image";
import PageWrapper from "@/components/page-wrapper";

export default function page({ params }: { params: { game: string } }) {
  const title = decodeURI(params.game);
  return (
    // <PageWrapper>
    <div className="pt-24 w-full max-w-5xl mx-auto ">
      <Image
        className="absolute top-0 right-0 w-full -z-10 h-[450px] "
        src={
          "https://utfs.io/f/574c0290-48d1-4a8e-93a3-2940ae737137-ce8p23.jpg"
        }
        alt="dragonflight"
        width={1280}
        height={720}
      />
      <div className="bg-gradient-to-b from-transparent dark:to-slate-950  absolute top-0 right-0 w-full -z-10 h-[450px] to-70% to-white" />

      <div className=" flex flex-col space-y-8 z-10 ">
        <Description title={title} />

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
    </div>
    // </PageWrapper>
  );
}
