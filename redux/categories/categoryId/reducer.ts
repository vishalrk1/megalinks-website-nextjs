import { createReducer } from "@reduxjs/toolkit";
import { getIndividualCategory } from "./actions";
import { Category } from "@/redux/types";

export type InduvudualCategoryState = {
  data: Category | null;
  pending: boolean;
  error: boolean;
};

const initialState = {
  data: null,
  pending: false,
  error: false,
} as InduvudualCategoryState;

const IndividualCategoryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getIndividualCategory.pending, (state) => {
      state.data = null;
      state.pending = true;
    })
    .addCase(getIndividualCategory.fulfilled, (state, { payload }) => {
      state.data = payload.data?.at(0);
      state.pending = false;
    })
    .addCase(getIndividualCategory.rejected, (state) => {
      state.error = true;
      state.pending = false;
    });
});

export default IndividualCategoryReducer;
