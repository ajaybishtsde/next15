import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Prisma from "../lib/client";

const ProfileCard = async () => {
  const { userId } = auth();
  if (!userId) return;
  const user = await Prisma.user.findFirst({
    where: {
      clerkId: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });
  if (!user) return null;
  return (
    <>
      <div className="bg-white p-4 flex flex-col gap-6 rounded-lg">
        <div className="relative h-20">
          <Image
            src={user?.cover || "/noCover.png"}
            alt="cover"
            fill
            className="w-full rounded-lg object-cover"
          />
          <Image
            src={user?.avatar || "./noAvatar.png"}
            alt="avatar"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full absolute right-0 left-0 m-auto -bottom-5"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xl font-bold">
            {user?.name && user.lastname
              ? user.name + " " + user.lastname
              : user.username}
          </span>
          <div className="flex gap-4">
            <div className="flex gap-1">
              <Image
                src={
                  "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
                }
                width={12}
                height={12}
                alt=""
                className="h-3 w-3 rounded-md"
              />
              <Image
                src={
                  "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
                }
                width={12}
                height={12}
                alt=""
                className="h-3 w-3 rounded-md"
              />
              <Image
                src={
                  "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
                }
                width={12}
                height={12}
                alt=""
                className="h-3 w-3 rounded-md"
              />
            </div>
            <span className="text-xs text-gray-600">
              {user?._count.followers} followers
            </span>
          </div>
          <button className="bg-blue-500 text-white rounded-md font-medium px-2 py-2 text-xs">
            <Link href={"/profile/ajay"}>My Profile</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
