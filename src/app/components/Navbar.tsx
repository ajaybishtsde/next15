import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* left */}
      <div>
        <Link href={"/"}>VibeSpace</Link>
      </div>
      {/* center */}
      <div className="hidden"></div>
      {/* right */}
      <MobileMenu />
    </>
  );
};

export default Navbar;
