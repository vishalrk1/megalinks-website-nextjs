import supabase from "@/lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "query-string";

interface Query {
  isApproved?: boolean;
  isFeatured?: boolean;
}

export const getAnimePacks = createAsyncThunk(
  "animepacks/getAnimePacks",
  async (query: Query) => {
    const data = await supabase.from('Animepack').select();
    return data;
    // const url = qs.stringifyUrl({
    //   url: "https://megalinks-admin-portal.vercel.app/api/user_2SgfmOCdWygqr1aufFdXqmOBfAK/animepacks",
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
