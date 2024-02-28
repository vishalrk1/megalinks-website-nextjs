import { createReducer } from "@reduxjs/toolkit";
import { Session } from "../types";
import { getUserSession } from "./actions";

export type UserSessionState = {
  session: Session | null;
};

const initailState = {
  session: null,
} as UserSessionState;

const UserSessionReducer = createReducer(initailState, (builder) => {
  builder.addCase(getUserSession, (state, { payload }) => {
    state.session = payload;
  });
});

export default UserSessionReducer;
