import { createReducer } from "@reduxjs/toolkit";
import { Category } from "../types"
import { getCategories } from "./actions";

export type CategoriesState = {
    data: Category[] | null,
    pending: boolean,
    error: boolean
};

const initialState = {
    data: null,
    pending: false,
    error: false,
} as CategoriesState;

const CategoriesReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(getCategories.pending, (state) => {
        state.data = null;
        state.pending = true;
    })
    .addCase(getCategories.fulfilled, (state, {payload}) => {
        state.data = payload;
        state.pending = false;
    })
    .addCase(getCategories.rejected, (state) => {
        state.error = true;
        state.pending = false;
    })
})

export default CategoriesReducer;