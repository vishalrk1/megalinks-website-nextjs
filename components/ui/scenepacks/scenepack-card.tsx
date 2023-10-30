"use client";

import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import { Expand, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import { Scenepack } from "@/redux/types";
import IconButton from "../icon-button";
import Link from "next/link";
import ScenepackDetailsModal from "../modals/scenepack-modal";

interface ScenepackCardProps {
  data: Scenepack;
}

const ScenepackCard: React.FC<ScenepackCardProps> = ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    // router.push(`/product/${data?.id}`);
  };

  //   const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
  //     event.stopPropagation();

  //     previewModal.onOpen(data);
  //   };

  //   const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
  //     event.stopPropagation();

  //     cart.addItem(data);
  //   };

  return (
    <>
    <ScenepackDetailsModal isOpen={open} data={data} onClose={()=>setOpen(false)}/>
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.imageUrl}
          alt={`megalinks-${data.label}-scenepack`}
          fill
          className="aspect-square object-cover rounded-md sm:aspect-[2.6/1.8]"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => setOpen(true)}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <Link href={data.packUrl} target="_blank">
              <IconButton
                onClick={() => {}}
                icon={<Download size={20} className="text-gray-600" />}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-sm md:text-lg">{data.label}</p>
        <p className="text-xs md:text-sm text-gray-500">
          Credits: {data.credit}
        </p>
      </div>
    </div>
    </>
  );
};

export default ScenepackCard;
