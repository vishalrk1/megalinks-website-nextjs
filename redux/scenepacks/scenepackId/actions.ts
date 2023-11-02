import supabase from "@/lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIndividualScenePack = createAsyncThunk(
  "scenepack/getIndividualScenePack",
  async (scenepackId: string) => {
    const data = await supabase.from('Scenepack').select().match({id: scenepackId});
    return data;
    // const res = await axios.get(
    //   `https://megalinks-admin-portal.vercel.app/api/user_2SgfmOCdWygqr1aufFdXqmOBfAK/scenepacks/${scenepackId}`
    // );
    // return res.data;
  }
);
