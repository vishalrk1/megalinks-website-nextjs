"use client";

import { ErrorInfo } from "@/components/ErrorInfo";
import Loader from "@/components/Loader";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { registerUser } from "@/redux/auth/action";
import { RootState } from "@/redux/store";
import { getUserSession } from "@/redux/userSession/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../../../../assets/FeedbackHeader.jpg";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMeaasage, setErrorMessage] = useState<string>(
    "Something went wrong try again"
  );
  const { status, error } = useSelector((state: RootState) => state.auth); // Select auth slice state

  const handleSignup = async () => {
    setIsError(false);
    dispatch(registerUser({ email, password, name }))
      .then((data: any) => {
        if (data.type === "auth/registerUser/fulfilled") {
          toast.success(
            "Congrats! You have successfully created an account 🎉",
            {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            }
          );
          router.push("/");
        } else if (data.type === "auth/registerUser/rejected") {
          setIsError(true);
          setErrorMessage(error?.split(": ")[1]?.split(". ")[0] as string);
        }
      })
      .catch((_err: any) => {
        setIsError(true);
      });
  };

  return (
    <main className="min-h-screen">
      <div className="relative flex flex-col h-screen items-end justify-end p-4">
        <div className="relative w-full z-10 inset-0 flex items-center justify-end px-20">
          <Link href="/">
            <h1 className="text-white font-bold text-2xl py-6 hover:underline">
              Back to home
            </h1>
          </Link>
        </div>
        <div className="relative z-10 w-[50%] h-full rounded-xl flex flex-col items-center justify-center">
          <CardWrapper
            headerTitle="Register"
            backButtonHref="/login"
            backButtonLbel="already have an account?"
            headerLabel="keep exploring and create crazy videos"
            showSocials={false}
          >
            <input
              type="text"
              placeholder="Name"
              className="mb-2 w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-2 w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
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
              className="w-full bg-black mt-3 text-white py-2.5 font-satoshi font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-0 disabled:bg-gray-200 disabled:text-gray-700 disabled:cursor-not-allowed"
              onClick={handleSignup}
              disabled={status === "loading"}
            >
              {status === "loading" && <Loader />}
              Create Account
            </button>
          </CardWrapper>
        </div>
        <Image src={Banner} alt="Banner" fill className="object-cover" />
      </div>
    </main>
    // <div className="flex flex-row h-screen items-center justify-center">
    //   <div className="w-full max-w-xs">
    //     <CardWrapper
    //       headerTitle="Register"
    //       backButtonHref="/login"
    //       backButtonLbel="already have an account?"
    //       headerLabel="keep exploring and create crazy videos"
    //       showSocials={false}
    //     >
    //       <input
    //         type="text"
    //         placeholder="Name"
    //         className="mb-2 w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       <input
    //         type="email"
    //         placeholder="Email"
    //         className="mb-2 w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         className="w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-sm font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       {isError && <ErrorInfo message={errorMeaasage} />}
    //       <button
    //         className="w-full bg-black mt-3 text-white py-2.5 font-satoshi font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-0 disabled:bg-gray-200 disabled:text-gray-700 disabled:cursor-not-allowed"
    //         onClick={handleSignup}
    //         disabled={status === "loading"}
    //       >
    //         {status === "loading" && <Loader />}
    //         Create Account
    //       </button>
    //     </CardWrapper>
    //   </div>
    // </div>
  );
}
