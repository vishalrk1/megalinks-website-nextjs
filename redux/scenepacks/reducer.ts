import { createReducer } from "@reduxjs/toolkit";
import { Scenepack } from "../types";
import { getScenePackData } from "./actions";

export type ScenepackState = {
  scenepackData: Scenepack[];
  scenepackPending: boolean;
  scenepackError: boolean;
};

const initialState = {
  scenepackData: [],
  scenepackPending: false,
  scenepackError: false,
} as ScenepackState;

const ScenepackReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getScenePackData.pending, (state) => {
      state.scenepackPending = true;
    })
    .addCase(getScenePackData.fulfilled, (state, { payload }) => {
      state.scenepackPending = false;
      state.scenepackData = payload;
    })
    .addCase(getScenePackData.rejected, (state) => {
      state.scenepackPending = false;
      state.scenepackError = true;
    });
});

export default ScenepackReducer;
