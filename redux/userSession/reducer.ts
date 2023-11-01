import { createReducer } from "@reduxjs/toolkit";
import { Session } from "@supabase/supabase-js";
import { create } from "domain";
import { init } from "next/dist/compiled/@vercel/og/satori";
import { getUserSession } from "./actions";

export type UserSessionState = {
  session: Session | null;
};

const initailState = {
  session: null,
} as UserSessionState;

const UserSessionReducer = createReducer(initailState, (builder) => {
  builder.addCase(getUserSession.fulfilled, (state, { payload }) => {
    state.session = payload;
  });
});

export default UserSessionReducer;