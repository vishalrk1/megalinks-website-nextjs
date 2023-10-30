import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectAnimepacks = (state: RootState) => state.fetchAnimepacks;

export const animepacksSelector = createSelector(
  selectAnimepacks,
  (state) => state
);
