import React from "react";
import Prisma from "../lib/client";
import { auth, clerkClient } from "@clerk/nextjs/server";
import FriendReqList from "./FriendReqList";
const FriendRequest = async () => {
  const { userId } = auth();
  const mongoId = (await clerkClient.users.getUser(userId as string))
    .privateMetadata;
  const friendRequests = await Prisma.followRequest.findMany({
    where: {
      receiverId: mongoId.mongoId as string,
    },
    include: {
      sender: true,
    },
  });
  if (friendRequests.length === 0) return null;
  return (
    <>
      <FriendReqList
        friendRequests={friendRequests}
        currentUserId={mongoId.mongoId as string}
      />
    </>
  );
};

export default FriendRequest;
