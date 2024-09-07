import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      {/* left */}
      <div className="md:hidden lg:block lg:w-1/4">
        <Link href={"/"}>
          <span className="text-blue-700 font-extrabold text-3xl font-mono">
            VibeSpace
          </span>
        </Link>
      </div>
      {/* center */}
      <div className="hidden md:flex lg:w-3/4">
        <div className="flex gap-6 text-gray-600">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={"/home.png"}
              alt="Homepage"
              width={24}
              height={24}
              className="w-4 h-4"
            />
            <span className="font-bold">Homepage</span>
          </Link>
          <Link href={"/friends"} className="flex items-center gap-2 ">
            <Image src={"/friends.png"} alt="Homepage" width={24} height={24} />
            <span className="font-bold">Friends</span>
          </Link>
          <Link href={"/stories"} className="flex items-center gap-2">
            <Image src={"/stories.png"} alt="Homepage" width={24} height={24} />
            <span className="font-bold">Stories</span>
          </Link>
          <div className="hidden xl:flex bg-slate-100 p-2 rounded-xl">
            <input
              type="text"
              className="bg-slate-100 outline-none"
              placeholder="search..."
            />
            <Image src={"/search.png"} alt="search" width={24} height={24} />
          </div>
        </div>
      </div>
      {/* right */}

      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="flex justify-center items-center h-screen">
            <div className="rounded-full h-6 w-6 bg-slate-800 animate-ping"></div>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="people" width={24} height={24} />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/messages.png"
                alt="messages"
                width={24}
                height={24}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/notifications.png"
                alt="notifications"
                width={24}
                height={24}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm me-2">
              <Image src="/login.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </>
  );
};

export default Navbar;
