import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIndividualScenePack = createAsyncThunk(
  "scenepack/getIndividualScenePack",
  async (scenepackId: string) => {
    const res = await axios.get(
      `https://megalinks-admin-portal.vercel.app/api/user_2SgfmOCdWygqr1aufFdXqmOBfAK/scenepacks/${scenepackId}`
    );
    return res.data;
  }
);
