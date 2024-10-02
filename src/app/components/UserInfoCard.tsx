import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Prisma from "../lib/client";
import RightMenuInteractionComp from "./RightMenuInteractionComp";
import { currentUser } from "@clerk/nextjs/server";
import UpdateUser from "./UpdateUser";

const UserInfoCard = async ({
  user,
  mongoId,
}: {
  user: User;
  mongoId: string;
}) => {
  const formatedDate = new Date(user.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let isBlocked = false;
  let isFollowing = false;
  let isFollowRequestSent = false;
  // check if user is bloked
  if (mongoId) {
    const res = await Prisma.block.findFirst({
      where: {
        blockerId: mongoId,
        blockedId: user.id,
      },
    });
    if (res) isBlocked = true;
  } else isBlocked = false;
  // check if user is following user
  if (mongoId) {
    const res = await Prisma.follower.findFirst({
      where: {
        userFollower: mongoId,
        userFollowing: user.id,
      },
    });
    if (res) isFollowing = true;
  } else isFollowing = false;

  // check if user has already sent follow request
  if (mongoId) {
    const res = await Prisma.followRequest.findFirst({
      where: {
        senderId: mongoId,
        receiverId: user.id,
      },
    });
    if (res) isFollowRequestSent = true;
  } else isFollowRequestSent = false;
  return (
    <>
      <div className="bg-white p-4 shadow-2xl flex flex-col gap-4 rounded-lg">
        <div className="flex justify-between">
          <span className="text-gray-600">User Information</span>
          {user.id === mongoId ? (
            <UpdateUser user={user} mongoId={mongoId} />
          ) : (
            <Link
              href={"/"}
              className="text-blue-600 text-sm cursor-pointer items-center"
            >
              See all
            </Link>
          )}
        </div>
        <div className="flex gap-3">
          <span className="text-xl">
            {" "}
            {user?.name && user.lastname
              ? user.name + " " + user.lastname
              : user.username}
          </span>
          <span className="text-gray-600">@{user.username}</span>
        </div>
        {user.description && (
          <p className="text-gray-600 text-sm">{user.description}</p>
        )}
        {/* living */}
        {user.city && (
          <div className="flex gap-3 items-center">
            <Image
              src={"/map.png"}
              width={16}
              height={16}
              alt="location"
              className="h-4 w-4"
            />
            <span className="text-gray-600">
              Living in <strong className="text-gray-600">{user.city}</strong>
            </span>
          </div>
        )}
        {/* education */}
        {user.school && (
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
              <strong className="text-gray-600">{user.school}</strong>
            </span>
          </div>
        )}
        {/* job */}
        {user.work && (
          <div className="flex gap-3 items-center">
            <Image
              src={"/work.png"}
              width={16}
              height={16}
              alt="location"
              className="h-4 w-4"
            />
            <span className="text-gray-600">
              Works at <strong className="text-gray-600">{user.work}</strong>
            </span>
          </div>
        )}
        {/* link */}
        <div className="flex justify-between items-center flex-wrap gap-2">
          {user.website && (
            <div className="flex items-center gap-2">
              <Image
                src={"/link.png"}
                alt="link"
                height={20}
                width={20}
                className="h-5 w-5"
              />
              <span className="text-blue-600 cursor-pointer text-base">
                {user.website}
              </span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Image
              src={"/date.png"}
              alt="date"
              height={20}
              width={20}
              className="h-5 w-5"
            />
            <span className="text-gray-600">Joined {formatedDate}</span>
          </div>
        </div>
        {mongoId !== user.id && (
          <Suspense fallback="loading.....">
            <RightMenuInteractionComp
              userId={user.id}
              currentUserId={mongoId}
              isBlocked={isBlocked}
              isFollowing={isFollowing}
              isFolloweRequestSent={isFollowRequestSent}
            />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default UserInfoCard;
