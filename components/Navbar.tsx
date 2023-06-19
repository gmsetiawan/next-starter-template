import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import UserAccountNav from "./UserAccountNav";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { authOptions, getAuthSession } from "@/lib/auth";

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />

        <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* search form */}
          </div>
          {/* actions */}
          <div className="flex items-center gap-2">
            <ModeToggle />
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <Link href="/signin" className={buttonVariants()}>
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
