import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectCategories = (state: RootState) => state.fetchCategories;

export const categoriesSelector = createSelector(
  selectCategories,
  (state) => state
);
