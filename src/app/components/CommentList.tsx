"use client";
import { useClerk } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";
import { addComment } from "../lib/actions";
type CommentsType = Comment & { user: User | null };
const CommentList = ({
  comments,
  postId,
  currentUserId,
}: {
  comments: CommentsType[];
  postId: string;
  currentUserId: string;
}) => {
  const { user } = useClerk();
  const [commentState, setCommentState] = useState(comments);
  const [desc, setDesc] = useState("");
  const [optimisticComments, addOptimisticComments] = useOptimistic(
    commentState,
    (state, value: CommentsType) => [value, ...state]
  );
  const createComment = async () => {
    if (!user || !desc) return;
    addOptimisticComments({
      id: Math.random().toString(),
      desc,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: currentUserId,
      postId,
      user: {
        id: currentUserId,
        createdAt: new Date(),
        clerkId: null,
        username: user.username as string,
        avatar: user.imageUrl as string,
        cover: null,
        name: user.firstName as string,
        lastname: user.lastName as string,
        description: null,
        city: null,
        school: null,
        work: null,
        website: null,
      },
    });
    const createdComment = await addComment(postId, desc, currentUserId);
    setCommentState((prev: any) => [createdComment, ...prev]);
  };
  return (
    <>
      {user && (
        <div className="flex gap-4 items-center">
          <Image
            src={user.imageUrl}
            alt="user"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <form
            action={createComment}
            className="flex justify-between items-center w-full bg-slate-50 rounded-xl"
          >
            <input
              type="text"
              name="desc"
              id=""
              onChange={(e) => setDesc(e.target.value)}
              className=" rounded-lg p-2 outline-none w-full bg-slate-50"
              placeholder="Write a comment..."
            />
            <Image
              src={"/emoji.png"}
              alt="emoji"
              width={12}
              height={12}
              className="w-4 h-4 cursor-pointer"
            />
          </form>
        </div>
      )}
      {/* other comments */}
      {optimisticComments.map(
        (comment) =>
          comment.user && (
            <div
              className="flex gap-4 items-start justify-evenly mt-3 p-2"
              key={comment.id}
            >
              <Image
                src={comment.user.avatar || "/noAvatar.png"}
                alt="user"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />

              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  {/* name */}
                  <span>
                    {comment.user.name && comment.user.lastname
                      ? comment.user.name + " " + comment.user.lastname
                      : comment.user.username}
                  </span>
                  {/* comment */}
                  <p className="text-sm">{comment.desc}</p>
                  {/* interact */}
                  <div className="flex gap-6 items-center rounded-2xl">
                    <Image
                      src={"/like.png"}
                      alt="like"
                      width={12}
                      height={12}
                      className="cursor-pointer h-3 w-3"
                    />
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-400 text-xs">
                      123 <span className="hidden md:inline">Likes</span>
                    </span>
                    <span className="cursor-pointer text-gray-400 text-xs">
                      Reply
                    </span>
                  </div>
                </div>
                <Image
                  src={"/more.png"}
                  alt="more"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
              </div>
            </div>
          )
      )}
    </>
  );
};

export default CommentList;
