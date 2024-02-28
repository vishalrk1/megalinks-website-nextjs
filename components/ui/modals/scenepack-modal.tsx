import { Scenepack } from "@/redux/types";
import Modal from "../modal";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { userSessionSelector } from "@/redux/userSession/selector";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Scenepack;
}

const ScenepackDetailsModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const { session } = useSelector((state: RootState) => state.fetchUserSession);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="MegaLink Scene Pack">
      <div className="flex flex-row m-1">
        <div className="bg-white group cursor-pointer rounded-xl border p-3 h-max w-[200px] md:w-[300px]">
          <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image
              src={data.imageUrl}
              alt={`megalinks-${data.label}-scenepack`}
              fill
              sizes="100%"
              className="aspect-square object-cover rounded-md sm:aspect-[2.6/1.8]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-2 md:ml-4 md:space-y-3">
          <h1 className="font-bold text-sm text-clip md:text-lg mt-2">
            {data.label}
          </h1>
          <p className="invisible md:visible text-xs md:text-base">
            This scenepack is submitted by {data.credit}
          </p>
          {user === null ? (
            <div className="flex flex-col space-y-1 w-max md:flex-row md:items-center md:justify-center md:space-x-4">
              <Link href="/login">
                <Button className="text-sm md:text-base">Log In</Button>
              </Link>
              <Link href="/sign-up">
                <Button className="text-sm md:text-base">Sign Up</Button>
              </Link>
            </div>
          ) : (
            <Link href={data.packUrl} target="_blank">
              <Button className="w-fit md:w-full">Download</Button>
            </Link>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ScenepackDetailsModal;
