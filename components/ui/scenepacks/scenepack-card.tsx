"use client";

import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import { Expand, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import { Scenepack } from "@/redux/types";
import IconButton from "../icon-button";
import Link from "next/link";
import ScenepackDetailsModal from "../modals/scenepack-modal";
import { userSessionSelector } from "@/redux/userSession/selector";
import { useAppSelector } from "@/redux/hooks";
import UserNotLoggedInModal from "../modals/Login-modal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import BlurImage from '../../../app/assets/noImage.png'

interface ScenepackCardProps {
  data: Scenepack;
}

const ScenepackCard: React.FC<ScenepackCardProps> = ({ data }) => {
  const router = useRouter();
  const { session } = useSelector((state: RootState) => state.fetchUserSession);
  const [openPackModal, setOpenPackModal] = useState(false);
  const [openNotLoogedInModal, setOpenNotLoogedInModal] = useState(false);

  const handleClick = (link: string) => {
    console.log(session);
    if(session?.user){
      router.push(link);
    } else {
      setOpenNotLoogedInModal(true);
    }
  };
  
  return (
    <>
    <ScenepackDetailsModal isOpen={openPackModal} data={data} onClose={()=>setOpenPackModal(false)} />
    <UserNotLoggedInModal isOpen={openNotLoogedInModal} onClose={()=>setOpenNotLoogedInModal(false)} />
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.imageUrl}
          alt={`megalinks-${data.label}-scenepack`}
          fill
          sizes="100%"
          className="aspect-square object-cover rounded-md sm:aspect-[2.6/1.8]"
          placeholder="blur"
          blurDataURL="../../../app/assets/noImage.png"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => setOpenPackModal(true)}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
                onClick={() => handleClick(data.packUrl)}
                icon={<Download size={20} className="text-gray-600" />}
            />
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
