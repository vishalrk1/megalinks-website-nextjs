"use client";

import { ErrorInfo } from "@/components/ErrorInfo";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { loginUser } from "@/redux/auth/action";
import { useAppDispatch } from "@/redux/hooks";
import { AppDispatch, RootState } from "@/redux/store";
import { getUserSession } from "@/redux/userSession/actions";
import UserSessionReducer from "@/redux/userSession/reducer";
import { userSessionSelector } from "@/redux/userSession/selector";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { error } from "console";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();
  const dispatch = useAppDispatch();
  const [isError, setIsError] = useState(false);
  const [errorMeaasage, setErrorMessage] = useState<string>(
    "Something went wrong try again"
  );
  const { status, error } = useSelector((state: RootState) => state.auth); // Select auth slice state

  const handleLogin = async () => {
    setIsError(false);
    dispatch(loginUser({ email, password }))
      .then((data: any) => {
        console.log(data);
        if (data.type === "auth/loginUser/fulfilled") {
          toast.success("Login Successful");
          router.push("/");
        } else if (data.type === "auth/loginUser/rejected") {
          setIsError(true);
          setErrorMessage(error?.split(": ")[1]?.split(". ")[0] as string);
        }
      })
      .catch((_err: any) => {
        setIsError(true);
      });
  };

  return (
    <div className="flex flex-row h-screen items-center justify-center">
      <div className="w-full max-w-xs items-center">
        <CardWrapper
          headerTitle="Log In"
          backButtonHref="/sign-up"
          backButtonLbel="dont have an account?"
          headerLabel="Start your next crazy edit with our resources"
          showSocials={false}
        >
          <input
            type="email"
            placeholder="Email"
            className="mb-2 w-full font-s rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isError && <ErrorInfo message={errorMeaasage} />}
          <button
            className="flex items-center justify-center gap-2 w-full bg-black mt-3 text-white py-2.5 font-satoshi font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-0 disabled:bg-gray-200 disabled:text-gray-700 disabled:cursor-not-allowed"
            onClick={handleLogin}
            disabled={status === "loading"}
          >
            {status === "loading" && <Loader />}
            Keep Exploring
          </button>
        </CardWrapper>
      </div>
    </div>
  );
}
