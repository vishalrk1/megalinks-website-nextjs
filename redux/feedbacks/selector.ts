import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectFeedbacks = (state: RootState) => state.fetchFeedbacks;

export const FeedbacksSelector = createSelector(
  selectFeedbacks,
  (state) => state
);
