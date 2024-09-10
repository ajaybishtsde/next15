import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = () => {
  return (
    <>
      <div className="bg-white p-4 shadow-2xl flex flex-col gap-4 rounded-lg">
        <div className="flex justify-between">
          <span className="text-gray-600">User Information</span>
          <Link
            href={"/"}
            className="text-blue-600 text-sm cursor-pointer items-center"
          >
            See all
          </Link>
        </div>
        <div className="flex gap-3">
          <span className="text-xl">Ajay Bisht</span>
          <span className="text-gray-600">@ajaybisht</span>
        </div>
        <p className="text-gray-600 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          exercitationem doloremque accusamus, ratione placeat.
        </p>
        {/* living */}
        <div className="flex gap-3 items-center">
          <Image
            src={"/map.png"}
            width={16}
            height={16}
            alt="location"
            className="h-4 w-4"
          />
          <span className="text-gray-600">
            Living in <strong className="text-gray-600">Haldwani</strong>
          </span>
        </div>
        {/* education */}
        <div className="flex gap-3 items-center">
          <Image
            src={"/school.png"}
            width={16}
            height={16}
            alt="location"
            className="h-4 w-4"
          />
          <span className="text-gray-600">
            Went to
            <strong className="text-gray-600"> Amrapali Institute</strong>
          </span>
        </div>
        {/* job */}
        <div className="flex gap-3 items-center">
          <Image
            src={"/work.png"}
            width={16}
            height={16}
            alt="location"
            className="h-4 w-4"
          />
          <span className="text-gray-600">
            Works at <strong className="text-gray-600">ICS</strong>
          </span>
        </div>
        {/* link */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src={"/link.png"}
              alt="link"
              height={20}
              width={20}
              className="h-5 w-5"
            />
            <span className="text-blue-600 cursor-pointer text-base">
              ajay.bisht
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/date.png"}
              alt="date"
              height={20}
              width={20}
              className="h-5 w-5"
            />
            <span className="text-gray-600">Joined September 2024</span>
          </div>
        </div>
        <button className="bg-blue-400 text-white w-full p-1 rounded-lg">
          Following
        </button>
        <div className="flex justify-end items-end text-xs text-red-400 cursor-pointer">
          <span>Block User</span>
        </div>
      </div>
    </>
  );
};

export default UserInfoCard;
