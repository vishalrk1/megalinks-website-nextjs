import supabase from "@/lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const data = await supabase.from('Category').select();
    // console.log('supabase data fetch >>')
    // console.log(data);

    // const res = await axios
    //   .get(
    //     `https://megalinks-admin-portal.vercel.app/api/user_2SgfmOCdWygqr1aufFdXqmOBfAK/categories`
    //   )
    //   .catch(function (error) {
    //     throw new Error("Something Went Wrong");
    //   });
    // console.log(res.data);
    return data;
  }
);
