"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    setLoading(true);
    await supabase.auth
      .signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      })
      .then(() => {
        router.refresh();
        // sucess toast
        toast.success(
          (t) => (
            <div className="flex flex-col spacy-y-3 ml-3">
              <p className="font-bold mb-4">
                Verification mail has been sent. Please verify your account.
              </p>
              <Button variant="outline" onClick={() => toast.dismiss(t.id)}>
                Dismiss
              </Button>
            </div>
          ),
          { duration: 10000 }
        );
        router.push("/login");
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-row h-screen items-center justify-center">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4"
          action="/"
          method="POST"
          onSubmit={handleSignUp}
        >
          <div className="text-xl font-bold m-2 mb-5">Create New Account</div>
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
            />
            <p className="text-gray-400 text-xs italic">
              please choose a password
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button type="submit">Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
