import Link from "next/link";
import Image from "next/image";

import React from "react";
const Add = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-2xl text-sm flex flex-col gap-4">
        <div className="flex items-center justify-between font-medium">
          <span className="text-gray-500 text-lg">Sponsored Ads</span>
          <Image
            src={"/more.png"}
            width={12}
            height={12}
            alt="more"
            className="h-3 w-3 cursor-pointer"
          />
        </div>
        {/* <div className=""> */}
        <Image
          src={
            "https://images.unsplash.com/photo-1473773386757-42bbe7288351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww"
          }
          width={400}
          height={400}
          alt=""
          className="h-36 w-full rounded-lg mt-4"
        />
        {/* </div> */}
        <div className="flex gap-6 items-center">
          <Image
            src={
              "https://images.unsplash.com/photo-1473773386757-42bbe7288351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww"
            }
            width={40}
            height={40}
            alt=""
            className="rounded-full h-10 w-10"
          />
          <span>BigChef Lounge</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo
          error provident magni atque dolorum perspiciatis maxime asperiores.
        </p>
        <button className="w-full bg-slate-200 p-2 rounded-lg text-gray-600">
          Learn More
        </button>
      </div>
    </>
  );
};

export default Add;
