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
    <div className="flex flex-row h-screen items-center justify-center">
      <div className="w-full max-w-xs">
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
        {/* <form
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
        </form> */}
      </div>
    </div>
  );
}
