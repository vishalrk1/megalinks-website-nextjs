import Link from "next/link";
import { MainNav } from "./main-nav";
import { MobileSidebar } from "./mobile-sidebar";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { userSessionSelector } from "@/redux/userSession/selector";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getUserSession } from "@/redux/userSession/actions";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const supabase = createClientComponentClient();
  const session = useAppSelector(userSessionSelector);
  const router = useRouter();
  
  const handelSignOut = async () => {
    await supabase.auth.signOut();
    dispatch(getUserSession());
    router.refresh();
  }

  return (
    <nav className="border-b bg-white">
      <div className="flex flex-row h-16 items-center px-4 space-x-2">
        <div className="flex-1 flex flex-row space-x-5">
          <MobileSidebar />
          <h1 className="space-x-2 text-xl font-bold">MegaLinks</h1>
          <MainNav className="hidden md:flex mx-6 ml-4" />
        </div>
        {session['session'] ? (
          <Button className="flex-2" onClick={handelSignOut}>Sign Out</Button>
        ) : (
          <div className="space-x-2">
            <Link href="login">
              <Button className="flex-2">LogIn</Button>
            </Link>
            <Link href="sign-up">
              <Button className="flex-2">SignUp</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
