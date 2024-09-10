import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserMediaCard = () => {
  return (
    <>
      <div className="bg-white p-4 shadow-2xl flex flex-col gap-4 rounded-lg">
        <div className="flex justify-between">
          <span className="text-gray-600">User Media</span>
          <Link
            href={"/"}
            className="text-blue-600 text-sm cursor-pointer items-center"
          >
            See all
          </Link>
        </div>
        <div className="flex gap-6 flex-wrap">
          <div className="w-[20%]">
            <Image
              src={
                "https://images.unsplash.com/photo-1611200945005-403b70229452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww"
              }
              width={80}
              height={80}
              alt=""
              className="w-40 h-28 rounded-xl cursor-pointer"
            />
          </div>
          <div className="w-[20%]">
            <Image
              src={
                "https://images.unsplash.com/photo-1515138692129-197a2c608cfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
              }
              width={80}
              height={80}
              alt=""
              className="w-40 h-28 rounded-xl cursor-pointer"
            />
          </div>
          <div className="w-[20%]">
            <Image
              src={
                "https://images.unsplash.com/photo-1568038479111-87bf80659645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww"
              }
              width={80}
              height={80}
              alt=""
              className="w-40 h-28 rounded-xl cursor-pointer"
            />
          </div>
          <div className="w-[20%]">
            <Image
              src={
                "https://images.unsplash.com/photo-1496672254107-b07a26403885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww"
              }
              width={80}
              height={80}
              alt=""
              className="w-40 h-28 rounded-xl cursor-pointer"
            />
          </div>
          <div className="w-[20%]">
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww"
              }
              width={80}
              height={80}
              alt=""
              className="w-40 h-28 rounded-xl cursor-pointer"
            />
          </div>
          <div className="w-[20%]">
            <Image
              src={
                "https://images.unsplash.com/photo-1508185140592-283327020902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fHww"
              }
              width={80}
              height={80}
              alt=""
              className="w-40 h-28 rounded-xl cursor-pointer"
            />
          </div>
          <div className="w-[20%]">
            <Image
              src={
                "https://images.unsplash.com/photo-1578910985276-6cd1a7bc6dd4?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={80}
              height={80}
              alt=""
              className="w-40 h-28 rounded-xl cursor-pointer"
            />
          </div>
          <div className="w-[20%]">
            <Image
              src={
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
              }
              width={80}
              height={80}
              alt=""
              className="w-40 h-28 rounded-xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMediaCard;
