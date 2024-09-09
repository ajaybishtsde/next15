"use client";

import { useState } from "react";

const MobileMenu = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <>
      <div className="md:hidden">
        <div
          className="h-8  flex flex-col justify-center items-center gap-2 cursor-pointer relative"
          onClick={() => {
            setToggleMenu((prev) => !prev);
          }}
        >
          <div
            className={`w-8 h-1 bg-blue-900 ${
              toggleMenu ? "rotate-45 " : ""
            }origin-left ease-in-out duration-500`}
          ></div>
          <div
            className={`w-8 h-1 bg-blue-900 ${
              toggleMenu ? "opacity-0 " : ""
            }ease-in-out duration-500`}
          ></div>
          <div
            className={`w-8 h-1 bg-blue-900 ${
              toggleMenu ? "-rotate-45 " : ""
            }origin-left ease-in-out duration-500`}
          ></div>
        </div>
        <div
          className={` ${
            toggleMenu ? "h-[93vh] absolute left-0 top-[7vh] w-full" : "hidden"
          }`}
        >
          <ul className="bg-slate-400 w-full h-[93vh] flex flex-col justify-center items-center gap-8">
            <li className="text-white font-bold">Home</li>
            <li className="text-white font-bold">Friends</li>
            <li className="text-white font-bold">Groups</li>
            <li className="text-white font-bold">Stories</li>
            <li className="text-white font-bold">Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
