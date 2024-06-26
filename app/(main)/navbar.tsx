import Link from "next/link";
import { auth } from "@clerk/nextjs";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";

const Navbar = async () => {
  const { userId } = auth();

  return (
    <div className="fixed inset-x-0 top-0 z-[10] h-fit border-b border-zinc-300 bg-zinc-100 py-2">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between gap-2">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-sm font-medium text-zinc-700 md:block">
            reddix
          </p>
        </Link>

        {/* search bar */}

        {userId ? (
          <p>Logged in</p>
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
