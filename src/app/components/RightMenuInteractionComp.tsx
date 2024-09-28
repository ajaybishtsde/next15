"use client";

import { useOptimistic, useState } from "react";
import { switchBlock, switchFollow } from "../lib/actions";

const RightMenuInteractionComp = ({
  userId,
  currentUserId,
  isBlocked,
  isFollowing,
  isFolloweRequestSent,
}: {
  userId: string;
  currentUserId: string;
  isBlocked: boolean;
  isFollowing: boolean;
  isFolloweRequestSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isBlocked,
    followeRequestSent: isFolloweRequestSent,
  });
  const [followText, switchFollowText] = useOptimistic(
    userState,
    (prev, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...prev,
            following: prev.following && false,
            followeRequestSent:
              !prev.following && !prev.followeRequestSent ? true : false,
          }
        : {
            ...prev,
            blocked: !prev.blocked,
          }
  );
  const follow = async () => {
    switchFollowText("follow");
    try {
      await switchFollow(userId, currentUserId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followeRequestSent:
          !prev.following && !prev.followeRequestSent ? true : false,
      }));
    } catch (error) {
      console.log("error", error);
    }
  };
  const block = async () => {
    switchFollowText("block");
    try {
      console.log("bloack is caled");
      await switchBlock(userId, currentUserId);
      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <form action={follow}>
        <button className="bg-blue-400 text-white w-full p-1 rounded-lg">
          {followText.following
            ? "Following"
            : followText.followeRequestSent
            ? "Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="self-end">
        <button className="flex justify-end items-end text-xs text-red-400 cursor-pointer">
          <span>{followText.blocked ? "Unblock User" : "Block User"}</span>
        </button>
      </form>
    </>
  );
};

export default RightMenuInteractionComp;
