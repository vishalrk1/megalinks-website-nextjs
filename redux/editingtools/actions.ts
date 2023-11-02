import supabase from "@/lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getEditingTools = createAsyncThunk(
  "editingtools/getEditingTools",
  async () => {
    const data = await supabase.from('EditingTool').select();
    // console.log(data);
    // const res = await axios
    //   .get(
    //     "https://megalinks-admin-portal.vercel.app/api/user_2SgfmOCdWygqr1aufFdXqmOBfAK/editingtools"
    //   )
    //   .catch(function (error) {
    //     throw new Error("Something Went Wrong");
    //   });
    // console.log(res.data);
    // return res.data;
    return data;
  }
);

export default getEditingTools;
