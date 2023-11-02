import supabase from "@/lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "query-string";

interface Query {
  isFeatured?: boolean;
  isApproved?: boolean;
}

export const getTutorials = createAsyncThunk(
  "tutorials/getTutorials",
  async (query: Query) => {
    const data = await supabase.from('Tutorial').select();
    return data;
    // const url = qs.stringifyUrl({
    //   url: "https://megalinks-admin-portal.vercel.app/api/user_2SgfmOCdWygqr1aufFdXqmOBfAK/tutorials",
    //   query: {
    //     isFeatured: query.isFeatured,
    //     isApproved: query.isApproved,
    //   },
    // });
    // const res = await axios.get(url);
    // console.log(res.data);
    // return res.data;
  }
);
