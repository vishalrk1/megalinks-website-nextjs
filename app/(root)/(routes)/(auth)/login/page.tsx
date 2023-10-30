"use client";

import Container from "@/components/ui/container";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("karangalevr@gmail.com");
  const [password, setPassword] = useState("Vishal@01");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.push('/')
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <Container>
      <div className="flex flex-col space-y-3 h-screen">
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="bg-black text-white"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="bg-black text-white"
        />
        <button onClick={handleSignUp} className="p-4">Sign up</button>
        <button onClick={handleSignIn} className="p-4">Sign in</button>
        <button onClick={handleSignOut} className="p-4">Sign out</button>
      </div>
    </Container>
  );
}
