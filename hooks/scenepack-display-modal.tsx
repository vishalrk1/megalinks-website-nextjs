import { Scenepack } from "@/redux/types";
import { create } from "zustand";

interface PreviewScenePack {
    isOpen: boolean;
    data?: Scenepack;
    onOpen: (scenepack: Scenepack) => void;
    onClose: () => void;
};

const usePreviewScenepackModal = create<PreviewScenePack>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data) => set({data, isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default usePreviewScenepackModal;