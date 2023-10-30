import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, Download, Play } from "lucide-react";
import { EditingTool, Feedback, Tutorial } from "@/redux/types";
import IconButton from "../icon-button";
import Link from "next/link";
import { Badge } from "../badge";

interface FeedbackCardProps {
  data: Feedback;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ data }) => {
  const handleClick = () => {
    // router.push(`/product/${data?.id}`);
  };

  //   const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
  //     event.stopPropagation();

  //     previewModal.onOpen(data);
  //   };

  return (
    <div className="flex-none w-64 md:w-150">
      <div className="mr-4 mt-1 block rounded-lg bg-white shadow-md border-b-2 dark:bg-neutral-700">
        <div className="p-6">
          <p className="mb-4 text-sm md:text-lg text-neutral-600 dark:text-neutral-200">
            {data.message}
          </p>
          <h5 className="mb-2 text-sm md:text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {data.userName}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
