import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectUserSession = (state: RootState) => state.fetchUserSession;

export const userSessionSelector = createSelector(
    selectUserSession,
    (state) => state
);