import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Prisma from "../lib/client";

const UserMediaCard = async ({ user }: { user: User }) => {
  const mediaPost = await Prisma.post.findMany({
    where: {
      id: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });
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
          {mediaPost.length > 0
            ? mediaPost.map((post) => {
                return (
                  <div className="w-[20%]" key={post.id}>
                    <Image
                      src={post.img!}
                      width={80}
                      height={80}
                      alt=""
                      className="w-40 h-28 rounded-xl cursor-pointer"
                    />
                  </div>
                );
              })
            : "No media found!"}
        </div>
      </div>
    </>
  );
};

export default UserMediaCard;
