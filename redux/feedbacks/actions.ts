import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "query-string";

interface Query {
  isFeatured?: boolean;
}

export const getFeedbacks = createAsyncThunk(
  "feedbacks/getFeedbacks",
  async (query: Query) => {
    const url = qs.stringifyUrl({
      url: "https://megalinks-admin-portal.vercel.app/api/user_2SgfmOCdWygqr1aufFdXqmOBfAK/feedbacks",
      query: {
        isFeatured: query.isFeatured,
      },
    });

    const res = await axios.get(url);
    console.log(res.data);
    return res.data;
  }
);
