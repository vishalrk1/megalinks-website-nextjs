import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectEditingTools = (state: RootState) => state.fetchEditingTools;

export const editingToolsSelector = createSelector(
  selectEditingTools,
  (state) => state
);
