"use server";

import Prisma from "./client";
// For switching following
export const switchFollow = async (userId: string, currentUserId: string) => {
  try {
    if (!currentUserId) throw new Error("User is not authenticated");
    let isFollowing = await Prisma.follower.findFirst({
      where: {
        userFollower: userId,
        userFollowing: currentUserId,
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
        await Prisma.follower.create({
          data: {
            userFollower: userId,
            userFollowing: currentUserId,
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
