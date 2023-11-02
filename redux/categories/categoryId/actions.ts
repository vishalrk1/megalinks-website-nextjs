import supabase from "@/lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIndividualCategory = createAsyncThunk(
  "categories/getIndividualCategory",
  async (categoryId: string) => {
    const data = await supabase.from('Category').select().match({id: categoryId});
    // const res = await axios.get(
    //   `https://megalinks-admin-portal.vercel.app/api/user_2SgfmOCdWygqr1aufFdXqmOBfAK/categories/${categoryId}`
    // );
    return data;
  }
);
