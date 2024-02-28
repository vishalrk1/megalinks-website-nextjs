import Link from "next/link";
import { MainNav } from "./main-nav";
import { MobileSidebar } from "./mobile-sidebar";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { userSessionSelector } from "@/redux/userSession/selector";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getUserSession } from "@/redux/userSession/actions";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
import { logoutUser } from "@/redux/auth/action";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { session } = useSelector((state: RootState) => state.fetchUserSession);
  const { user } = useSelector((state: RootState) => state.auth);

  console.log(session);

  const handelSignOut = async () => {
    dispatch(logoutUser());
    router.refresh();
  };

  useEffect(() => {
    dispatch(getUserSession());
  }, [user]);

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="flex flex-row h-16 items-center px-4 space-x-2">
        <div className="flex-1 flex flex-row space-x-5">
          <MobileSidebar />
          <h1 className="space-x-2 text-xl font-bold">MegaLinks</h1>
          <MainNav className="hidden md:flex mx-6 ml-4" />
        </div>
        {user ? (
          <Button className="flex-2" onClick={handelSignOut}>
            Log Out
          </Button>
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
