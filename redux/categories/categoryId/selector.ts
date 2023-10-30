import { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectIndividualCategory = (state: RootState) =>
  state.fetchIndividualCategory;

export const individualCategorySelector = createSelector(
  selectIndividualCategory,
  (state) => state
);
