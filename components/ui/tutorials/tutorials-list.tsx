import { EditingTool, Tutorial } from "@/redux/types";
import NoResults from "../no-result";
import TutorialCard from "./tutorial-card";
import { Button } from "../button";
import { ArrowRight, Forward } from "lucide-react";
import Link from "next/link";

interface TutorialListProps {
  title: string;
  tutorialsData: Tutorial[];
  editingtoolsData: EditingTool[];
  isHome?: boolean;
}
const TutorialsList: React.FC<TutorialListProps> = ({
  title,
  tutorialsData,
  editingtoolsData,
  isHome,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-row items-center">
        <h3 className="flex-1 font-bold md:text-3xl sm:text-2xl">{title}</h3>
        {isHome && (
          <Link href="/tutorials">
            <Button variant="ghost" className="flex-2">
              Explore
              <ArrowRight size={15} className="mx-1" />
            </Button>
          </Link>
        )}
      </div>
      {tutorialsData.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tutorialsData.map((item) => (
          <TutorialCard key={item.id} data={item} editingTools={editingtoolsData}/>
        ))}
      </div>
    </div>
  );
};

export default TutorialsList;
