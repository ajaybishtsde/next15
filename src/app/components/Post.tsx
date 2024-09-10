import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4 my-4">
      {/* user */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1725550624010-2623171cdbd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"
            alt="user"
            width={40}
            height={40}
            className="rounded-full w-12 h-12"
          />
          <span className="">Sasuke uchiha</span>
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
        <div className="w-full min-h-96 relative">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="coffee"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor
          totam aut ipsum dicta delectus consequatur? Voluptate blanditiis rerum
          fugiat consequatus, reprehenderit eos provident, corporis nulla?
          Deleniti, omnis.
        </p>
      </div>
      {/* interaction */}
      <div className="flex items-center justify-between">
        <div className="flex gap-8">
          <div className="flex items-center bg-slate-50 gap-2 rounded-2xl">
            <Image
              src={"/like.png"}
              alt="like"
              width={16}
              height={16}
              className="cursor-pointer h-4 w-4"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">
              123 <span className="hidden md:inline">Likes</span>
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
            123 <span className="hidden md:inline">Shares</span>
          </span>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
