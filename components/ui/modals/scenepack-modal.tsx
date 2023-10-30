import { Scenepack } from "@/redux/types";
import Modal from "../modal";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
  
  interface ModalProps {
      isOpen: boolean;
      onClose: () => void;
      data: Scenepack;
  };
  
  const ScenepackDetailsModal: React.FC<ModalProps> = ({
      isOpen,
      onClose,
      data
  }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    }, []);

    if(!isMounted){

        return null;
    }
      return (  
          <Modal isOpen={isOpen} onClose={onClose} title="Scene Pack">
            <div className="flex flex-row m-1">
              <div className="bg-white group cursor-pointer rounded-xl border p-3 h-max w-[200px] md:w-[300px]">
                <div className="aspect-square rounded-xl bg-gray-100 relative">
                  <Image
                    src={data.imageUrl}
                    alt={`megalinks-${data.label}-scenepack`}
                    fill
                    className="aspect-square object-cover rounded-md sm:aspect-[2.6/1.8]"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-4 space-y-2">
                <h1 className="font-bold text-lg mt-2">{data.label}</h1>
                <p className="mt-1">This scenepack is submitted by {data.credit}</p>
                <Link href={data.packUrl} target="_blank">
                  <Button className="w-full">Download</Button>
                </Link>
              </div>
            </div>
          </Modal>
      );
  };
  
  export default ScenepackDetailsModal;