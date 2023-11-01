"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { useAppDispatch } from "@/redux/hooks";
import { AppDispatch } from "@/redux/store";
import { getUserSession } from "@/redux/userSession/actions";
import UserSessionReducer from "@/redux/userSession/reducer";
import { userSessionSelector } from "@/redux/userSession/selector";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { error } from "console";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();
  const dispatch = useAppDispatch();

  const handleSignIn = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data["user"]) {
      dispatch(getUserSession());
      toast.success("Log In Sucessful Welcome Back :)");
      router.push("/");
      router.refresh();
      setLoading(false);
    } else if (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong please try again !!");
    }
  };

  return (
    <div className="flex flex-row h-screen items-center justify-center">
      <div className="w-full max-w-xs items-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4"
          action="/"
          method="POST"
          onSubmit={handleSignIn}
        >
          <div className="text-xl font-bold m-2 mb-5">Continue Exploring</div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              id="Email"
              type="email"
              placeholder="Enter a valid email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              disabled={loading}
            />
            <p className="text-gray-400 text-xs italic">
              please choose a password
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button type="submit" disabled={loading}>
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
