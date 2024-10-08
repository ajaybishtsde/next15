"use client";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";
import { switchLikes } from "../lib/actions";

const PostInteraction = ({
  postId,
  commentNumber,
  likes,
  userId,
}: {
  postId: string;
  commentNumber: number;
  likes: string[];
  userId: string;
}) => {
  const [likeState, setLikeState] = useState({
    likesCount: likes.length,
    isLiked: userId ? likes.includes(userId) : false,
  });
  const [optimisticLikes, switchOptimisticLikes] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likesCount: state.isLiked ? state.likesCount - 1 : state.likesCount + 1,
        isLiked: !state.isLiked,
      };
    }
  );
  const likeAction = async (
    formData: FormData,
    currentUserId: string,
    postId: string
  ) => {
    switchOptimisticLikes("");
    try {
      switchLikes(formData, currentUserId, postId);
      setLikeState((state) => ({
        likesCount: state.isLiked ? state.likesCount - 1 : state.likesCount + 1,
        isLiked: !state.isLiked,
      }));
    } catch (error) {
      console.log(error, error);
    }
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-8">
        <div className="flex items-center bg-slate-50 gap-2 rounded-2xl">
          <form action={(formData) => likeAction(formData, userId, postId)}>
            <button>
              <Image
                src={optimisticLikes.isLiked ? "/liked.png" : "/like.png"}
                alt="like"
                width={16}
                height={16}
                className="cursor-pointer h-4 w-4"
              />
            </button>
          </form>
          <span className="text-gray-400">|</span>
          <span className="text-gray-400">
            {optimisticLikes.likesCount}{" "}
            <span className="hidden md:inline">Likes</span>
          </span>
        </div>
        <div className="flex items-center bg-slate-50 gap-2 rounded-2xl">
          <Image
            src={"/comment.png"}
            alt="comment"
            width={16}
            height={16}
            className="cursor-pointer h-4 w-4"
          />
          <span className="text-gray-400">|</span>
          <span className="text-gray-400">
            123 <span className="hidden md:inline">Comments</span>
          </span>
        </div>
      </div>
      <div className="flex items-center bg-slate-50 gap-2 rounded-2xl">
        <Image
          src={"/share.png"}
          alt="share"
          width={16}
          height={16}
          className="cursor-pointer h-4 w-4"
        />
        <span className="text-gray-400">|</span>
        <span className="text-gray-400">
          <span className="hidden md:inline">Share</span>
        </span>
      </div>
    </div>
  );
};

export default PostInteraction;
