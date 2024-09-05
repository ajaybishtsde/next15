import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";

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
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="font-bold">Homepage</span>
          </Link>
          <Link href={"/friends"} className="flex items-center gap-2 ">
            <Image src={"/friends.png"} alt="Homepage" width={16} height={16} />
            <span className="font-bold">Friends</span>
          </Link>
          <Link href={"/stories"} className="flex items-center gap-2">
            <Image src={"/stories.png"} alt="Homepage" width={16} height={16} />
            <span className="font-bold">Stories</span>
          </Link>
        </div>
      </div>
      {/* right */}
      <MobileMenu />
    </>
  );
};

export default Navbar;
