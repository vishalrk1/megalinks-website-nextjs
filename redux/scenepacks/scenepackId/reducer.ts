import { Scenepack } from "@/redux/types";
import { createReducer } from "@reduxjs/toolkit";
import { getIndividualScenePack } from "./actions";

export type IndividualScenePackState = {
  data: Scenepack | null;
  pending: boolean;
  error: boolean;
};

const initialState = {
  data: null,
  pending: false,
  error: false,
} as IndividualScenePackState;

const IndividualScenePackReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getIndividualScenePack.pending, (state) => {
      state.data = null;
      state.pending = true;
    })
    .addCase(getIndividualScenePack.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data = payload;
    })
    .addCase(getIndividualScenePack.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
});

export default IndividualScenePackReducer;
