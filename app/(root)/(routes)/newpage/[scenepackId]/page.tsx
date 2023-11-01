"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getIndividualScenePack } from "@/redux/scenepacks/scenepackId/actions";
import { individualScenepackSelector } from "@/redux/scenepacks/scenepackId/selector";
import { useEffect } from "react";

const ScenepackPage = ({
    params
}: {params : {scenepackId: string}}) => {

    return (
        <div>
        </div>
    );
};

export default ScenepackPage;