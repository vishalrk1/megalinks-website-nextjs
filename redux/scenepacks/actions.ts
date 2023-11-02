import supabase from "@/lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "query-string";

interface Query {
  isFeatured?: boolean;
  isApproved?: boolean;
}

export const getScenePackData = createAsyncThunk(
  "scenepack/getScenepacks",
  async (query: Query) => {
    const data = await supabase.from('Scenepack').select();
    return data;
    // const url = qs.stringifyUrl({
    //   url: "https://megalinks-admin-portal.vercel.app/api/user_2SgfmOCdWygqr1aufFdXqmOBfAK/scenepacks",
    //   query: {
    //     isFeatured: query.isFeatured,
    //     isApproved: query.isApproved,
    //   },
    // });
    // const res = await axios.get(url);
    // return res.data;
  }
);
