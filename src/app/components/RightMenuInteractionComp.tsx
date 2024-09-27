"use client";

import { useOptimistic, useState } from "react";
import { switchFollow } from "../lib/actions";

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
  const [followText, switchFollowText] = useOptimistic(userState, (prev) => ({
    ...prev,
    following: prev.following && false,
    followeRequestSent:
      !prev.following && !prev.followeRequestSent ? true : false,
  }));
  const follow = async () => {
    switchFollowText("");
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
      <form action="">
        <div className="flex justify-end items-end text-xs text-red-400 cursor-pointer">
          <span>{followText.blocked ? "Unblock User" : "Block User"}</span>
        </div>
      </form>
    </>
  );
};

export default RightMenuInteractionComp;
