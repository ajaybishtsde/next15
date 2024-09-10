import React from "react";
import Image from "next/image";
import Link from "next/link";
const FriendRequest = () => {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-2xl text-sm">
        <div className="flex items-center justify-between font-medium">
          <span className="text-gray-500">Friend Requests</span>
          <Link href={"/"} className="text-xs text-blue-500">
            See all
          </Link>
        </div>
        <div className="flex justify-between mt-4">
          {/* user img and name */}
          <div className="flex gap-4 items-center">
            <Image
              src={
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              }
              width={40}
              height={40}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">Sakura Haruno</span>
          </div>
          {/* accept or reject icon */}
          <div className="flex gap-4 items-center">
            <Image
              src={"/accept.png"}
              alt="reject"
              width={20}
              height={20}
              className="cursor-pointer h-5 w-5"
            />
            <Image
              src={"/reject.png"}
              alt="reject"
              width={20}
              height={20}
              className="cursor-pointer h-5 w-5"
            />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          {/* user img and name */}
          <div className="flex gap-4 items-center">
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1664099905313-f391570783fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
              }
              width={40}
              height={40}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">Hinata Hyuga</span>
          </div>
          {/* accept or reject icon */}
          <div className="flex gap-4 items-center">
            <Image
              src={"/accept.png"}
              alt="reject"
              width={20}
              height={20}
              className="cursor-pointer h-5 w-5"
            />
            <Image
              src={"/reject.png"}
              alt="reject"
              width={20}
              height={20}
              className="cursor-pointer h-5 w-5"
            />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          {/* user img and name */}
          <div className="flex gap-4 items-center">
            <Image
              src={
                "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
              }
              width={40}
              height={40}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">Gaara Yuzawa</span>
          </div>
          {/* accept or reject icon */}
          <div className="flex gap-4 items-center">
            <Image
              src={"/accept.png"}
              alt="reject"
              width={20}
              height={20}
              className="cursor-pointer h-5 w-5"
            />
            <Image
              src={"/reject.png"}
              alt="reject"
              width={20}
              height={20}
              className="cursor-pointer h-5 w-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
