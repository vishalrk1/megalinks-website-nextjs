"use client";
import { Scenepack } from "@/redux/types";
import NoResults from "../no-result";
import ScenepackCard from "./scenepack-card";
import Link from "next/link";
import { Button } from "../button";
import { ArrowRight } from "lucide-react";
import ScenepackSearchBar from "./scenepack-search-bar";
import { useState } from "react";

interface ScenepackListProps {
  title: string;
  items: Scenepack[];
  isHome?: boolean;
}

const ScenepackList: React.FC<ScenepackListProps> = ({
  title,
  items,
  isHome,
}) => {
  const [filteredScenepacks, setFiltredScenepacks] = useState(items);

  const handelSearchQuery = (query: string) => {
    const filtredList = items.filter((scenepack) =>
      scenepack.label.toLowerCase().includes(query.toLowerCase()),
    );
    setFiltredScenepacks(filtredList);
  };

  return (
    <div className="h-full space-y-4">
      <div className="flex flex-row items-center">
        <h3 className="flex-1 font-bold md:text-3xl sm:text-2xl">{title}</h3>
        {isHome && (
          <Link href="/scenepacks">
            <Button variant="ghost" className="flex-2">
              Explore
              <ArrowRight size={15} className="mx-1" />
            </Button>
          </Link>
        )}
      </div>
      {items.length === 0 && <NoResults />}
      {!isHome && <ScenepackSearchBar filterScenePacks={handelSearchQuery} />}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {!isHome
          ? filteredScenepacks.map((item) => (
              <ScenepackCard key={item.id} data={item} />
            ))
          : items.map((item) => <ScenepackCard key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default ScenepackList;
