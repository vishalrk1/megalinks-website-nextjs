"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getIndividualScenePack } from "@/redux/scenepacks/scenepackId/actions";
import { individualScenepackSelector } from "@/redux/scenepacks/scenepackId/selector";
import { useEffect } from "react";

const ScenepackPage = ({
    params
}: {params : {scenepackId: string}}) => {
    const dispatch = useAppDispatch();
    const {data, pending, error} = useAppSelector(individualScenepackSelector);

    useEffect(() => {
        dispatch(getIndividualScenePack(params.scenepackId));
    }, [dispatch]);

    return (
        <div>
            {pending && `Loading Scenepack`}
            {data && data.label}
            {error && `Something Went Wrong`}
        </div>
    );
};

export default ScenepackPage;