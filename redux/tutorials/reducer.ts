import { createReducer } from "@reduxjs/toolkit";
import { Tutorial } from "../types";
import { getTutorials } from "./actions";

export type TutorialsState = {
  tutorialsData: Tutorial[];
  tutorialsPending: boolean;
  tutorialsError: boolean;
};

const initialState = {
  tutorialsData: [],
  tutorialsPending: false,
  tutorialsError: false,
} as TutorialsState;

const TutorialsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTutorials.pending, (state) => {
      state.tutorialsPending = true;
    })
    .addCase(getTutorials.fulfilled, (state, { payload }) => {
      state.tutorialsData = payload.data as Tutorial[];
      state.tutorialsPending = false;
    })
    .addCase(getTutorials.rejected, (state) => {
      state.tutorialsError = true;
      state.tutorialsPending = false;
    });
});

export default TutorialsReducer;
