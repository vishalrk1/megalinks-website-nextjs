import { createAsyncThunk } from "@reduxjs/toolkit";
import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getUserSession = createAsyncThunk(
    'user/userSessions',
    async () => {
        const supabase = createClientComponentClient({});
        const {data: {session}} = await supabase.auth.getSession();
        return session;
    }
);