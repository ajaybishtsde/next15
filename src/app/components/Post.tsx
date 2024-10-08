import Image from "next/image";
import React from "react";
import Comments from "./Comments";
import { Post as PostTypePrisma, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";
type postType = PostTypePrisma & { user: User } & {
  likes: [{ userId: string }];
} & { _count: { comments: number } };
const Post = ({ post, userId }: { post: postType; userId: string }) => {
  return (
    <div className="flex flex-col gap-4 my-4">
      {/* user */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/noAvatar.png"}
            alt="user"
            width={40}
            height={40}
            className="rounded-full w-12 h-12"
          />
          <span className="">
            {post.user.name && post.user.lastname
              ? post.user.name + " " + post.user.lastname
              : post.user.username}
          </span>
        </div>
        <Image
          src={"/more.png"}
          alt="more"
          width={16}
          height={16}
          className="cursor-pointer"
        />
      </div>
      {/* image */}
      <div className="flex flex-col gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              alt="coffee"
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        <p>{post.desc}</p>
      </div>
      {/* interaction */}
      <PostInteraction
        commentNumber={post._count.comments}
        likes={post.likes.map((item) => item.userId)}
        postId={post.id}
        userId={userId}
      />
      <Comments />
    </div>
  );
};

export default Post;
