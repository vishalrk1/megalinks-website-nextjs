import { EditingTool, Feedback, Tutorial } from "@/redux/types";
import NoResults from "../no-result";
import { Button } from "../button";
import { ArrowRight, Forward } from "lucide-react";
import Link from "next/link";
import FeedbackCard from "./feedback-card";

interface FeedbackListProps {
  title: string;
  feedbackData: Feedback[];
  isHome?: boolean;
}
const FeedbackList: React.FC<FeedbackListProps> = ({
  title,
  feedbackData,
  isHome,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex flex-row items-center">
        <h3 className="flex-1 font-bold md:text-3xl sm:text-2xl">{title}</h3>
        {isHome ? (
          <Link href="/feedbacks">
            <Button variant="ghost" className="flex-2">
              Explore
              <ArrowRight size={15} className="mx-1" />
            </Button>
          </Link>
        ) : (
          <Link href="feedbacks/feedback-form">
            <Button variant="default" className="flex-2">
              Add Your Review
            </Button>
          </Link>
        )}
      </div>
      {feedbackData.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {feedbackData.map((item) => (
          <FeedbackCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
