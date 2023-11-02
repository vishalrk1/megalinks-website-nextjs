import supabase from "@/lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "query-string";

interface Query {
  isFeatured?: boolean;
}

export const getFeedbacks = createAsyncThunk(
  "feedbacks/getFeedbacks",
  async (query: Query) => {
    const data = await supabase.from('Feedback').select()
    return data;
  }
);
