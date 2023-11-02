import { createReducer } from "@reduxjs/toolkit";
import { EditingTool } from "../types";
import getEditingTools from "./actions";
import { stat } from "fs";

export type editingtoolsState = {
  editintoolData: EditingTool[];
  editintoolPending: boolean;
  editintoolError: boolean;
};

const initialState = {
  editintoolData: [],
  editintoolPending: false,
  editintoolError: false,
} as editingtoolsState;

const EditingtoolsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getEditingTools.pending, (state) => {
      state.editintoolPending = true;
    })
    .addCase(getEditingTools.fulfilled, (state, { payload }) => {
      state.editintoolData = payload.data as EditingTool[];
      state.editintoolPending = false;
    })
    .addCase(getEditingTools.rejected, (state) => {
      state.editintoolError = true;
      state.editintoolPending = false;
    });
});

export default EditingtoolsReducer;
