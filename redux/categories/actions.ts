import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const res = await axios
      .get(
        `https://megalinks-admin-portal.vercel.app/api/user_2SgfmOCdWygqr1aufFdXqmOBfAK/categories`
      )
      .catch(function (error) {
        throw new Error("Something Went Wrong");
      });
    console.log(res.data);
    return res.data;
  }
);
