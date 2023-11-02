import { createReducer } from "@reduxjs/toolkit";
import { AnimePack } from "../types";
import { getAnimePacks } from "./actions";

export type AnimepacksState = {
  animepackData: AnimePack[];
  animepackPending: boolean;
  animepackError: boolean;
};

const initialState = {
  animepackData: [],
  animepackPending: false,
  animepackError: false,
} as AnimepacksState;

const AnimepacksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAnimePacks.pending, (state) => {
      state.animepackPending = true;
    })
    .addCase(getAnimePacks.fulfilled, (state, { payload }) => {
      state.animepackData = payload.data as AnimePack[];
      state.animepackPending = false;
    })
    .addCase(getAnimePacks.rejected, (state) => {
      state.animepackError = true;
      state.animepackPending = false;
    });
});

export default AnimepacksReducer;
