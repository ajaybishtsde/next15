import React from "react";
import Prisma from "../lib/client";
import CommentList from "./CommentList";

const Comments = async ({
  postId,
  userid,
}: {
  postId: string;
  userid: string;
}) => {
  const comments = await Prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });
  return (
    <>
      {/* comments */}
      <CommentList comments={comments} postId={postId} currentUserId={userid} />
    </>
  );
};

export default Comments;
