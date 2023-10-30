import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectTutorials = (state: RootState) => state.fetchTutorials;

export const tutorialsSelector = createSelector(
    selectTutorials,
    (state) => state
);