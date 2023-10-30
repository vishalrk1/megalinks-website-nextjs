import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import { Expand, Download, Play } from "lucide-react";
import { EditingTool, Tutorial } from "@/redux/types";
import IconButton from "../icon-button";
import Link from "next/link";
import { Badge } from "../badge";
import TutorialsDetailsModal from "../modals/tutorials-modal";

interface ScenepackCardProps {
  data: Tutorial;
  editingTools: EditingTool[];
}

const TutorialCard: React.FC<ScenepackCardProps> = ({ data, editingTools }) => {
  const [open, setOpen] = useState(false);

  const youtube_parser = (url: string) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  return (
    <>
      <TutorialsDetailsModal isOpen={open} data={data} onClose={() => setOpen(false)} imageUrl={`https://img.youtube.com/vi/${youtube_parser(data.ytUrl)}/mqdefault.jpg`}/>
      <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        {/* Image & actions */}
        <div className="aspect-video rounded-xl bg-gray-100 relative">
          <Image
            src={`https://img.youtube.com/vi/${youtube_parser(
              data.ytUrl
            )}/mqdefault.jpg`}
            alt={`megalinks-${data.label}-tutorial`}
            fill
            className="aspect-video object-cover rounded-md sm:aspect-[2.6/1.8]"
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <IconButton
                onClick={() => setOpen(true)}
                icon={<Expand size={20} className="text-gray-600" />}
              />
              <Link href={data.ytUrl} target="_blank">
                <IconButton
                  onClick={() => {}}
                  icon={<Play size={20} className="text-gray-600" />}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Description */}
        <div>
          <p className="md:font-semibold text-sm md:text-lg">{data.label}</p>
        </div>
        <Badge variant="secondary">
          {editingTools.find((item) => item.id === data.editingToolId)?.title}
        </Badge>
      </div>
    </>
  );
};

export default TutorialCard;