"use server";

import { revalidatePath } from "next/cache";
import Prisma from "./client";

// For switching following
export const switchFollow = async (userId: string, currentUserId: string) => {
  try {
    if (!currentUserId) throw new Error("User is not authenticated");
    let isFollowing = await Prisma.follower.findFirst({
      where: {
        userFollower: currentUserId, // user which is being following
        userFollowing: userId, // user which is being followed   (userFollowed)
      },
    });
    if (isFollowing) {
      await Prisma.follower.delete({
        where: {
          id: isFollowing.id,
        },
      });
    } else {
      let isFollowRequestSent = await Prisma.followRequest.findFirst({
        where: {
          receiverId: userId,
          senderId: currentUserId,
        },
      });
      if (isFollowRequestSent) {
        await Prisma.followRequest.delete({
          where: {
            id: isFollowRequestSent.id,
          },
        });
      } else {
        await Prisma.followRequest.create({
          data: {
            receiverId: userId,
            senderId: currentUserId,
          },
        });
      }
    }
  } catch (error) {
    console.log("error", error);
    return "Something went wrong";
  }
};
// for block unblock
export const switchBlock = async (userId: string, currentUserId: string) => {
  const isAlreadyBlocked = await Prisma.block.findFirst({
    where: {
      blockedId: userId,
      blockerId: currentUserId,
    },
  });
  if (!isAlreadyBlocked)
    await Prisma.block.create({
      data: {
        blockedId: userId,
        blockerId: currentUserId,
      },
    });
  else
    await Prisma.block.delete({
      where: {
        id: isAlreadyBlocked.id,
      },
    });
  try {
  } catch (error) {
    console.log("error", error);
    return "Something went wrong";
  }
};
// accept follow request
export const acceptRequest = async (userId: string, currentUserId: string) => {
  console.log("accept");
  try {
    const existingRequest = await Prisma.followRequest.findFirst({
      where: {
        receiverId: currentUserId,
        senderId: userId,
      },
    });
    if (existingRequest)
      await Prisma.followRequest.delete({
        where: {
          id: existingRequest.id,
        },
      });
    await Prisma.follower.create({
      data: {
        userFollowing: currentUserId,
        userFollower: userId, //( who sends the request)
      },
    });
  } catch (error) {
    console.log("error");
    return error;
  }
};
// delete follow request
export const deleteRequest = async (userId: string, currentUserId: string) => {
  console.log("reject");
  try {
    const result = await Prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });
    if (result) {
      await Prisma.followRequest.delete({
        where: {
          id: result.id,
        },
      });
    }
  } catch (error) {
    console.log("error");
    return error;
  }
};
