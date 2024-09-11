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
      <div className="md:hidden lg:block lg:w-[20%]">
        <Link href={"/"}>
          <span className="text-blue-700 font-extrabold text-3xl font-mono">
            VibeSpace
          </span>
        </Link>
      </div>
      {/* center */}
      <div className="hidden md:flex justify-between lg:w-[50%]">
        <div className="flex gap-6 text-gray-600">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={"/home.png"}
              alt="Homepage"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="font-bold">Homepage</span>
          </Link>
          <Link href={"/friends"} className="flex items-center gap-2 ">
            <Image
              src={"/friends.png"}
              alt="Homepage"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="font-bold">Friends</span>
          </Link>
          <Link href={"/stories"} className="flex items-center gap-2">
            <Image
              src={"/stories.png"}
              alt="Homepage"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="font-bold">Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex items-center w-[30%] bg-slate-100 p-1 rounded-xl">
          <input
            type="text"
            className="bg-slate-100 outline-none w-full"
            placeholder="search..."
          />
          <Image
            src={"/search.png"}
            alt="search"
            width={16}
            height={16}
            className="h-4 w-4"
          />
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
              <Image
                src="/people.png"
                alt="people"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/messages.png"
                alt="messages"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/notifications.png"
                alt="notifications"
                width={20}
                height={20}
                className="h-5 w-5"
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
