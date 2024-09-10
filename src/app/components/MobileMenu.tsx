"use client";

import { useEffect, useState } from "react";

const MobileMenu = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleMenu]);
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
          // onClick={() => setToggleMenu((prev) => !prev)}
          // onScroll={() => setToggleMenu((prev) => !prev)}
          className={` ${
            toggleMenu
              ? "h-[93vh] absolute left-0 top-[7vh] w-full z-50"
              : "hidden"
          }`}
        >
          <ul className="bg-slate-400 w-full h-[93vh] flex flex-col justify-center items-center gap-8">
            <li className="text-white font-bold cursor-pointer">Home</li>
            <li className="text-white font-bold cursor-pointer">Friends</li>
            <li className="text-white font-bold cursor-pointer">Groups</li>
            <li className="text-white font-bold cursor-pointer">Stories</li>
            <li className="text-white font-bold cursor-pointer">Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
