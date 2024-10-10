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
    <nav className="bg-blue-500 shadow-none border-0 z-20">
      <div className="flex flex-row h-16 items-center justify-between px-4 space-x-2 border-0">
        <div className="flex flex-row space-x-5">
          <MobileSidebar />
          <MainNav className="hidden md:flex mx-6 ml-4" />
        </div>
        <div>
          {user ? (
            <Button className="" onClick={handelSignOut}>
              Log Out
            </Button>
          ) : (
            <div className="space-x-2">
              <Link href="login">
                <Button
                  className="flex-2 text-white hover:scale-110 transition-all duration-300"
                  variant="link"
                >
                  LogIn
                </Button>
              </Link>
              <Link href="sign-up">
                <Button className="flex-2 bg-white hover:scale-110 transition-all duration-300 text-black hover:bg-white">
                  SignUp
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
