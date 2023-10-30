import { useEffect, useState } from "react";
import Modal from "../modal";
import { Tutorial } from "@/redux/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

interface TutorialsModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: Tutorial;
    imageUrl: string;
}

const TutorialsDetailsModal: React.FC<TutorialsModalProps> = ({
    isOpen,
    onClose,
    data,
    imageUrl,
}) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Watch Tutorial">
            <div className="flex flex-row m-1">
                <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 h-max w-[200px] md:w-[400px]">
                    <div className="aspect-video rounded-xl bg-gray-100 relative">
                        <Image
                            src={imageUrl}
                            alt={`megalinks-${data.label}-tutorial`}
                            fill
                            className="aspect-video object-cover rounded-md sm:aspect-[2.6/1.8]"
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-4 space-y-4">
                    <h1 className="font-semibold text-md">{data.label}</h1>
                    <Link href={data.ytUrl} target="_blank">
                        <Button className="w-full">Watch Video</Button>
                    </Link>
                </div>
            </div>
        </Modal>
    );
};

export default TutorialsDetailsModal;