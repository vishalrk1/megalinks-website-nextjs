import { createReducer } from "@reduxjs/toolkit";
import { Feedback } from "../types";
import { getFeedbacks } from "./actions";

export type FeedbacksState = {
  feedbacksData: Feedback[];
  feedbacksPending: boolean;
  feedbacksError: boolean;
};

const initialState = {
  feedbacksData: [],
  feedbacksPending: false,
  feedbacksError: false,
} as FeedbacksState;

const feedbacksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFeedbacks.pending, (state) => {
      state.feedbacksPending = true;
    })
    .addCase(getFeedbacks.fulfilled, (state, { payload }) => {
      state.feedbacksData = payload.data as Feedback[];
      state.feedbacksPending = true;
    })
    .addCase(getFeedbacks.rejected, (state) => {
      state.feedbacksError = true;
      state.feedbacksPending = false;
    });
});

export default feedbacksReducer;
