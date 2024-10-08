import React from "react";
import Post from "./Post";
import { auth, clerkClient } from "@clerk/nextjs/server";
import Prisma from "../lib/client";

const Feed = async ({ username }: { username?: string }) => {
  const { userId } = auth();
  const mongoId = (await clerkClient.users.getUser(userId as string))
    .privateMetadata;
  let posts: any[] = [];
  if (username) {
    posts = await Prisma.post.findMany({
      where: {
        user: {
          username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  if (!username && userId) {
    const following = await Prisma.follower.findMany({
      where: {
        userFollowing: mongoId.mongoId as string,
      },
      select: {
        userFollowing: true,
      },
    });
    const followingIds = following.map((item) => item.userFollowing);
    console.log("following>>>>>>>>>>>>>>>>", followingIds);
    posts = await Prisma.post.findMany({
      where: {
        id: {
          in: followingIds,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  return (
    <>
      <div className="bg-white shadow-2xl flex flex-col p-4">
        {!posts
          ? "No posts found"
          : posts.map((post) => (
              <Post
                key={post.id}
                post={post}
                userId={mongoId.mongoId as string}
              />
            ))}
      </div>
    </>
  );
};

export default Feed;
