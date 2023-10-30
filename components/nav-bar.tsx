import Link from "next/link";
import { MainNav } from "./main-nav";
import { MobileSidebar } from "./mobile-sidebar";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="flex flex-row h-16 items-center px-4 space-x-2">
        <div className="flex-1 flex flex-row space-x-5">
          <MobileSidebar />
          <h1 className="space-x-2 text-xl font-bold">MegaLinks</h1>
          <MainNav className="hidden md:flex mx-6 ml-4" />
        </div>
        <Link href="login">
          <Button className="flex-2">LogIn</Button>
        </Link>
        <Link href="sign-up">
          <Button className="flex-2">SignUp</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
