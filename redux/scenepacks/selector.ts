import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectScenepack = (state: RootState) => state.fetchScenepack

export const scenepackSelector = createSelector(
    selectScenepack,
    state => state
);