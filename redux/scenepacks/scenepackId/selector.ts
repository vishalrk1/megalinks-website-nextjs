import { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectIndividulaScenepack = (state: RootState) => state.fetchIndividualScenepack;

export const individualScenepackSelector = createSelector(
    selectIndividulaScenepack,
    state => state
)